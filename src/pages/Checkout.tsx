
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { getRestaurantById } from "@/data/restaurants";
import { addOrder } from "@/data/orders";
import { MapPin } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart, restaurantId, saveCustomerInfo } = useCart();
  const [restaurant, setRestaurant] = useState(() => 
    restaurantId ? getRestaurantById(restaurantId) : null
  );
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!items.length) {
      toast.error("Your cart is empty");
      setIsSubmitting(false);
      return;
    }
    
    // Save customer info to cart context
    saveCustomerInfo({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
    });
    
    // Create a new order
    const newOrder = addOrder({
      restaurantId: restaurantId!,
      restaurantName: restaurant?.name || "Unknown Restaurant",
      customerId: `cust-${Math.floor(Math.random() * 1000)}`,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      deliveryAddress: `${formData.address}, ${formData.city}, ${formData.zipCode}`,
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: getCartTotal(),
      status: 'pending',
    });
    
    // Simulate processing payment
    setTimeout(() => {
      // Show success and redirect to confirmation page
      toast.success("Order placed successfully!");
      clearCart();
      navigate(`/order-confirmation/${newOrder.id}`);
      setIsSubmitting(false);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div>
        <NavBar />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="mb-6">Add some delicious items to your cart and come back!</p>
          <Button asChild>
            <a href="/">Browse Restaurants</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="(123) 456-7890" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Delivery Address */}
                  <Separator className="my-4" />
                  <h3 className="text-lg font-semibold flex items-center">
                    <MapPin className="mr-2 h-5 w-5" /> 
                    Delivery Address
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      placeholder="123 Main St, Apt 4B" 
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        placeholder="New York" 
                        required
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input 
                        id="zipCode" 
                        name="zipCode" 
                        placeholder="10001" 
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* Payment Info */}
                  <Separator className="my-4" />
                  <h3 className="text-lg font-semibold">Payment Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input 
                      id="cardNumber" 
                      name="cardNumber" 
                      placeholder="1234 5678 9012 3456" 
                      required
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Expiration Date</Label>
                      <Input 
                        id="cardExpiry" 
                        name="cardExpiry" 
                        placeholder="MM/YY" 
                        required
                        value={formData.cardExpiry}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvc">CVC</Label>
                      <Input 
                        id="cardCvc" 
                        name="cardCvc" 
                        placeholder="123" 
                        required
                        value={formData.cardCvc}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-red hover:bg-brand-red/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                {restaurant && (
                  <div className="mb-4 pb-4 border-b">
                    <h3 className="font-medium">{restaurant.name}</h3>
                    <p className="text-sm text-gray-600">{restaurant.address}</p>
                  </div>
                )}
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.quantity}x </span>
                        {item.name}
                      </div>
                      <div>₹{(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18%)</span>
                    <span>₹{(getCartTotal() * 0.18).toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{(getCartTotal() * 1.18).toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6">
                <div className="w-full">
                  <Button 
                    className="w-full bg-brand-red hover:bg-brand-red/90" 
                    form="checkout-form"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
