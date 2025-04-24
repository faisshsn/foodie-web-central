
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minimumOrder: number;
  image: string;
}

const RestaurantCard = ({
  id,
  name,
  cuisine,
  rating,
  deliveryTime,
  minimumOrder,
  image,
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`} className="block group">
      <Card className="overflow-hidden h-full food-card border border-gray-200 hover:shadow-lg">
        <div className="relative h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-white text-gray-800 flex items-center gap-1 font-medium">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {rating.toFixed(1)}
            </Badge>
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm">{cuisine}</p>
          <div className="flex items-center justify-between mt-2 text-sm">
            <span>{deliveryTime}</span>
            <span>${minimumOrder} minimum</span>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Badge variant="outline" className="bg-gray-50">
            Free delivery
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
