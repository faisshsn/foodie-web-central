
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface MenuItemProps {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

const MenuItemCard = ({
  id,
  restaurantId,
  name,
  description,
  price,
  image,
  popular,
  vegetarian,
  spicy,
}: MenuItemProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      restaurantId,
      name,
      price,
      image,
    });
    toast.success(`${name} added to your cart`);
  };

  return (
    <Card className="overflow-hidden h-full food-card border border-gray-200">
      <div className="md:flex">
        <div className="md:w-1/3 h-32 md:h-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <div className="flex gap-1 mt-1">
                {popular && (
                  <Badge variant="secondary" className="bg-brand-yellow text-gray-800">
                    Popular
                  </Badge>
                )}
                {vegetarian && (
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    Veg
                  </Badge>
                )}
                {spicy && (
                  <Badge variant="outline" className="border-red-500 text-red-500">
                    Spicy
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                {description}
              </p>
            </div>
            <div className="text-right">
              <div className="font-medium mb-2">₹{price.toFixed(2)}</div>
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="bg-brand-red hover:bg-brand-red/90"
              >
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default MenuItemCard;
