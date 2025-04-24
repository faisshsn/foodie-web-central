
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import { getRestaurantById } from "@/data/restaurants";
import { getMenuItemsByRestaurant, MenuItem } from "@/data/menu-items";
import { MapPin, Clock, Star } from "lucide-react";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<any>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("");
  
  useEffect(() => {
    if (id) {
      // Simulate API call
      setIsLoading(true);
      setTimeout(() => {
        const restaurantData = getRestaurantById(id);
        const menu = getMenuItemsByRestaurant(id);
        
        setRestaurant(restaurantData);
        setMenuItems(menu);
        
        // Set the first category as active
        if (menu.length > 0) {
          const categories = [...new Set(menu.map(item => item.category))];
          setActiveCategory(categories[0]);
        }
        
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <div className="h-64 bg-gray-200 rounded-lg animate-pulse mb-8"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse mb-4 w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse mb-6 w-2/3"></div>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div>
        <NavBar />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <p className="mb-6">The restaurant you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/">Back to Homepage</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Get unique categories for menu tabs
  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        {/* Restaurant Header */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Badge className="bg-white text-gray-800">{restaurant.cuisine}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{restaurant.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{restaurant.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="mb-8">
          <p className="text-gray-700 mb-4">{restaurant.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Hours:</span> {restaurant.openingHours}
            </div>
            <div>
              <span className="font-medium">Minimum Order:</span> ${restaurant.minimumOrder}
            </div>
          </div>
        </div>

        {/* Menu Tabs */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <Tabs defaultValue={categories[0]} value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-6 overflow-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <MenuItemCard
                      key={item.id}
                      id={item.id}
                      restaurantId={item.restaurantId}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      popular={item.popular}
                      vegetarian={item.vegetarian}
                      spicy={item.spicy}
                    />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
