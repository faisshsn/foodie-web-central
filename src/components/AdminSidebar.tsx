
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, Store, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      path: "/admin",
    },
    {
      title: "Orders",
      icon: <ShoppingBag className="mr-2 h-4 w-4" />,
      path: "/admin/orders",
    },
    {
      title: "Restaurants",
      icon: <Store className="mr-2 h-4 w-4" />,
      path: "/admin/restaurants",
    },
    {
      title: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 h-screen flex flex-col">
      <div className="p-4">
        <Link to="/admin" className="flex items-center">
          <span className="text-brand-red font-bold text-xl">FoodieExpress</span>
          <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">Admin</span>
        </Link>
      </div>
      <Separator />
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                <Button
                  variant={currentPath === item.path ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    currentPath === item.path ? "bg-brand-red hover:bg-brand-red/90" : ""
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 mt-auto">
        <Separator className="mb-4" />
        <Link to="/">
          <Button variant="outline" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Back to Website
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
