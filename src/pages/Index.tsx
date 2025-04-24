
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RestaurantCard from "@/components/RestaurantCard";
import CuisineFilter from "@/components/CuisineFilter";
import { restaurants, getRestaurantsByCuisine, searchRestaurants } from "@/data/restaurants";

const Index = () => {
  const [searchParams] = useSearchParams();
  const cuisineParam = searchParams.get("cuisine") || "";
  const searchQuery = searchParams.get("search") || "";

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      let result;
      if (searchQuery) {
        result = searchRestaurants(searchQuery);
      } else if (cuisineParam) {
        result = getRestaurantsByCuisine(cuisineParam);
      } else {
        result = restaurants;
      }
      setFilteredRestaurants(result);
      setIsLoading(false);
    }, 500);
  }, [cuisineParam, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <CuisineFilter />
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {searchQuery ? `Search results for "${searchQuery}"` : 
               cuisineParam ? `${cuisineParam.charAt(0).toUpperCase() + cuisineParam.slice(1)} Restaurants` : 
               "All Restaurants"}
            </h2>
            
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-72 bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
            ) : filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    rating={restaurant.rating}
                    deliveryTime={restaurant.deliveryTime}
                    minimumOrder={restaurant.minimumOrder}
                    image={restaurant.image}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find restaurants.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
