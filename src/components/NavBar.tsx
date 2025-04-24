
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const NavBar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-brand-red font-bold text-2xl">FoodieExpress</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/checkout">
            <Button variant="outline" className="relative">
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="ghost" size="sm">
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
