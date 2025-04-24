
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Pizza, Ramen, Burger, Curry, Falafel, ChefHat } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface CuisineOption {
  name: string;
  value: string;
  icon: React.ReactNode;
}

const cuisines: CuisineOption[] = [
  { name: "All", value: "", icon: <ChefHat className="h-5 w-5" /> },
  { name: "Italian", value: "italian", icon: <Pizza className="h-5 w-5" /> },
  { name: "Asian", value: "asian", icon: <Ramen className="h-5 w-5" /> },
  { name: "American", value: "american", icon: <Burger className="h-5 w-5" /> },
  { name: "Indian", value: "indian", icon: <Curry className="h-5 w-5" /> },
  { name: "Middle Eastern", value: "middle-eastern", icon: <Falafel className="h-5 w-5" /> },
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
