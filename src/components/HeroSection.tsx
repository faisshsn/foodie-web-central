
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

const cuisines = [
  { name: "Italian", icon: "🍝" },
  { name: "Asian", icon: "🍜" },
  { name: "American", icon: "🍔" },
  { name: "Indian", icon: "🍛" },
  { name: "Middle Eastern", icon: "🥙" },
];

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(searchTerm)}`);
  };
  
  const handleCuisineClick = (cuisine: string) => {
    navigate(`/?cuisine=${cuisine.toLowerCase()}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-brand-red to-brand-orange py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Delicious Food <br /> Delivered To Your Door
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Choose from hundreds of restaurants and get your favorite meals delivered fast.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
              <Input
                type="text"
                placeholder="Search for restaurants or cuisines"
                className="bg-white/90"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" className="bg-brand-red hover:bg-brand-orange">
                Search
              </Button>
            </form>
            
            <div className="hidden md:block">
              <h3 className="text-white font-medium mb-3">Popular Cuisines</h3>
              <div className="flex flex-wrap gap-3">
                {cuisines.map((cuisine) => (
                  <Button
                    key={cuisine.name}
                    variant="secondary"
                    className="bg-white hover:bg-gray-100 text-gray-800"
                    onClick={() => handleCuisineClick(cuisine.name)}
                  >
                    <span className="mr-2">{cuisine.icon}</span>
                    {cuisine.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 max-w-md mx-auto lg:max-w-none">
            <div className="bg-white p-4 rounded-xl shadow-2xl transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Delicious Food" 
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-2xl transform -rotate-3 -mt-16 ml-12">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Delicious Food" 
                className="w-full h-36 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:hidden mt-8 px-4">
        <h3 className="text-white font-medium mb-3">Popular Cuisines</h3>
        <ScrollArea className="whitespace-nowrap">
          <div className="flex space-x-3 pb-2">
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine.name}
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-gray-800"
                onClick={() => handleCuisineClick(cuisine.name)}
              >
                <span className="mr-2">{cuisine.icon}</span>
                {cuisine.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default HeroSection;
