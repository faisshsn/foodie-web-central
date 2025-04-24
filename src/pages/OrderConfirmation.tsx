
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getOrderById, Order } from "@/data/orders";
import { CheckCircle, Clock, MapPin } from "lucide-react";

const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (orderId) {
      // Simulate API call
      setIsLoading(true);
      setTimeout(() => {
        const orderData = getOrderById(orderId);
        setOrder(orderData || null);
        
        // Set a random delivery time in minutes (between 25 and 45)
        setTimeRemaining(Math.floor(Math.random() * 20) + 25);
        
        setIsLoading(false);
      }, 500);
    }
  }, [orderId]);

  // Countdown timer
  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timeRemaining]);

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse mb-8"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!order) {
    return (
      <div>
        <NavBar />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Order not found</h1>
          <p className="mb-6">The order you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Homepage</Link>
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
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-500">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-green-700 mb-2">Order Confirmed!</h1>
                <p className="text-gray-600">
                  Your order #{order.id} has been received and is being processed
                </p>
              </div>
              
              <div className="mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="font-bold text-lg mb-2">Delivery Information</h2>
                    <div className="border rounded-md p-4 bg-gray-50">
                      <p className="font-medium">{order.customerName}</p>
                      <p className="text-gray-600 mb-2">{order.customerPhone}</p>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mr-1 mt-0.5" />
                        <p className="text-gray-600">{order.deliveryAddress}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-bold text-lg mb-2">Estimated Delivery</h2>
                    <div className="border rounded-md p-4 bg-gray-50">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="font-medium text-lg">
                          {timeRemaining > 0 
                            ? `About ${timeRemaining} minutes` 
                            : "Arriving soon!"}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        From {order.restaurantName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="font-bold text-lg mb-2">Order Summary</h2>
                <div className="border rounded-md p-4 space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.quantity}x </span>
                        {item.name}
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(order.total * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-3">
                      <span>Total</span>
                      <span>${(order.total * 1.1).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                  <Link to="/">Order More Food</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
