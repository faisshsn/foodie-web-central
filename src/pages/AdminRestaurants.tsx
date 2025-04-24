
import React, { useState, useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Search, Edit, Trash2, RefreshCw } from "lucide-react";
import { restaurants, Restaurant } from "@/data/restaurants";

const AdminRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState<Partial<Restaurant> | null>(null);

  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    setTimeout(() => {
      setAllRestaurants([...restaurants]);
      setDisplayedRestaurants([...restaurants]);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = allRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(term) || 
        restaurant.cuisine.toLowerCase().includes(term)
      );
      setDisplayedRestaurants(filtered);
    } else {
      setDisplayedRestaurants(allRestaurants);
    }
  }, [searchTerm, allRestaurants]);

  const openNewRestaurantDialog = () => {
    setCurrentRestaurant({
      id: "",
      name: "",
      cuisine: "",
      description: "",
      address: "",
      rating: 0,
      deliveryTime: "",
      minimumOrder: 0,
      image: "",
      openingHours: "",
    });
    setDialogOpen(true);
  };

  const openEditDialog = (restaurant: Restaurant) => {
    setCurrentRestaurant({...restaurant});
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setCurrentRestaurant(null);
  };

  const handleSaveRestaurant = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentRestaurant) {
      // This is a mock implementation
      // In a real app, this would call an API
      
      if (currentRestaurant.id) {
        // Edit existing restaurant
        setAllRestaurants(prev => 
          prev.map(r => r.id === currentRestaurant.id ? currentRestaurant as Restaurant : r)
        );
        toast.success(`Restaurant "${currentRestaurant.name}" updated successfully`);
      } else {
        // Add new restaurant
        const newRestaurant = {
          ...currentRestaurant,
          id: `${allRestaurants.length + 1}`,
          rating: 5.0, // Default rating for new restaurants
        } as Restaurant;
        
        setAllRestaurants(prev => [newRestaurant, ...prev]);
        toast.success(`Restaurant "${newRestaurant.name}" added successfully`);
      }
      
      handleDialogClose();
    }
  };

  const handleDeleteRestaurant = (id: string) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      // Delete the restaurant
      setAllRestaurants(prev => prev.filter(r => r.id !== id));
      toast.success("Restaurant deleted successfully");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Restaurants</h1>
            <p className="text-gray-500">Manage restaurant partners</p>
          </div>
          <Button onClick={openNewRestaurantDialog} className="bg-brand-red hover:bg-brand-red/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Restaurant
          </Button>
        </div>

        {/* Filters & Search */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search restaurants..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="md:text-right">
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setSearchTerm("")}>
              <RefreshCw className="h-4 w-4" />
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Restaurants Table */}
        <Card>
          <CardHeader>
            <CardTitle>Restaurant Partners</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                {Array(5).fill(null).map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            ) : displayedRestaurants.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Restaurant</TableHead>
                    <TableHead>Cuisine</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Min. Order</TableHead>
                    <TableHead>Delivery Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedRestaurants.map((restaurant) => (
                    <TableRow key={restaurant.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={restaurant.image} 
                            alt={restaurant.name} 
                            className="h-10 w-10 rounded-md object-cover"
                          />
                          <div>
                            <div className="font-medium">{restaurant.name}</div>
                            <div className="text-sm text-gray-500">{restaurant.address}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{restaurant.cuisine}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          {restaurant.rating.toFixed(1)}
                        </div>
                      </TableCell>
                      <TableCell>${restaurant.minimumOrder}</TableCell>
                      <TableCell>{restaurant.deliveryTime}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => openEditDialog(restaurant)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDeleteRestaurant(restaurant.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-lg font-medium">No restaurants found</h3>
                <p className="text-gray-500">Try adjusting your search or add a new restaurant</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add/Edit Restaurant Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {currentRestaurant?.id ? "Edit Restaurant" : "Add New Restaurant"}
              </DialogTitle>
              <DialogDescription>
                {currentRestaurant?.id 
                  ? "Update restaurant information in the system." 
                  : "Add a new restaurant partner to the platform."}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSaveRestaurant} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Restaurant Name</Label>
                  <Input 
                    id="name" 
                    value={currentRestaurant?.name || ""} 
                    onChange={(e) => setCurrentRestaurant({...currentRestaurant, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cuisine">Cuisine Type</Label>
                  <Input 
                    id="cuisine" 
                    value={currentRestaurant?.cuisine || ""} 
                    onChange={(e) => setCurrentRestaurant({...currentRestaurant, cuisine: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={currentRestaurant?.description || ""} 
                  onChange={(e) => setCurrentRestaurant({...currentRestaurant, description: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  value={currentRestaurant?.address || ""} 
                  onChange={(e) => setCurrentRestaurant({...currentRestaurant, address: e.target.value})}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minimumOrder">Minimum Order ($)</Label>
                  <Input 
                    id="minimumOrder" 
                    type="number"
                    value={currentRestaurant?.minimumOrder || ""} 
                    onChange={(e) => setCurrentRestaurant({
                      ...currentRestaurant, 
                      minimumOrder: parseFloat(e.target.value)
                    })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliveryTime">Delivery Time</Label>
                  <Input 
                    id="deliveryTime" 
                    placeholder="e.g., 20-30 min"
                    value={currentRestaurant?.deliveryTime || ""} 
                    onChange={(e) => setCurrentRestaurant({...currentRestaurant, deliveryTime: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="openingHours">Opening Hours</Label>
                <Input 
                  id="openingHours" 
                  placeholder="e.g., 10:00 AM - 10:00 PM"
                  value={currentRestaurant?.openingHours || ""} 
                  onChange={(e) => setCurrentRestaurant({...currentRestaurant, openingHours: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input 
                  id="image" 
                  value={currentRestaurant?.image || ""} 
                  onChange={(e) => setCurrentRestaurant({...currentRestaurant, image: e.target.value})}
                  required
                />
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-brand-red hover:bg-brand-red/90">
                  {currentRestaurant?.id ? "Update Restaurant" : "Add Restaurant"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminRestaurants;
