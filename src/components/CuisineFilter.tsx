
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Pizza, Soup, Sandwich, Cake, Egg, ChefHat, Coffee, Fish, Wheat, Salad } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface CuisineOption {
  name: string;
  value: string;
  icon: React.ReactNode;
}

const cuisines: CuisineOption[] = [
  { name: "All", value: "", icon: <ChefHat className="h-5 w-5" /> },
  { name: "North Indian", value: "north indian", icon: <Pizza className="h-5 w-5" /> },
  { name: "South Indian", value: "south indian", icon: <Soup className="h-5 w-5" /> },
  { name: "Bengali", value: "bengali", icon: <Fish className="h-5 w-5" /> },
  { name: "Maharashtrian", value: "maharashtrian", icon: <Wheat className="h-5 w-5" /> },
  { name: "Kashmiri", value: "kashmiri", icon: <Sandwich className="h-5 w-5" /> },
  { name: "Rajasthani", value: "rajasthani", icon: <Cake className="h-5 w-5" /> },
  { name: "Gujarati", value: "gujarati", icon: <Salad className="h-5 w-5" /> },
  { name: "Goan", value: "goan", icon: <Egg className="h-5 w-5" /> },
  { name: "Kerala", value: "kerala", icon: <Coffee className="h-5 w-5" /> },
];

const CuisineFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCuisine = searchParams.get("cuisine") || "";

  const handleCuisineClick = (cuisine: string) => {
    const params = new URLSearchParams(location.search);
    if (cuisine) {
      params.set("cuisine", cuisine);
    } else {
      params.delete("cuisine");
    }
    // Navigate to the root path with the updated query params
    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="my-6">
      <h2 className="font-medium mb-3">Filter by Cuisine</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 pb-2">
          {cuisines.map((cuisine) => (
            <Button
              key={cuisine.value}
              variant={currentCuisine === cuisine.value ? "default" : "outline"}
              className={
                currentCuisine === cuisine.value
                  ? "bg-brand-red hover:bg-brand-red/90"
                  : ""
              }
              onClick={() => handleCuisineClick(cuisine.value)}
            >
              <span className="mr-2">{cuisine.icon}</span>
              {cuisine.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CuisineFilter;
