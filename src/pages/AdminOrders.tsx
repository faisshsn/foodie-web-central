
import React, { useState, useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "sonner";
import { Search, RefreshCw } from "lucide-react";
import { orders, updateOrderStatus, Order } from "@/data/orders";

const AdminOrders = () => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [displayedOrders, setDisplayedOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    setTimeout(() => {
      setAllOrders([...orders]);
      setDisplayedOrders([...orders]);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = [...allOrders];
    
    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.status === statusFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(term) || 
        order.customerName.toLowerCase().includes(term) ||
        order.restaurantName.toLowerCase().includes(term)
      );
    }
    
    setDisplayedOrders(filtered);
  }, [searchTerm, statusFilter, allOrders]);

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    const updatedOrder = updateOrderStatus(orderId, newStatus);
    if (updatedOrder) {
      setAllOrders(prev => 
        prev.map(order => order.id === orderId ? updatedOrder : order)
      );
      toast.success(`Order ${orderId} status updated to ${newStatus}`);
    } else {
      toast.error(`Failed to update order ${orderId}`);
    }
  };

  const getStatusBadgeVariant = (status: Order["status"]) => {
    switch (status) {
      case "delivered": return "outline";
      case "out-for-delivery": return "secondary";
      case "preparing": return "default";
      case "cancelled": return "destructive";
      default: return "outline";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-gray-500">Manage and track all customer orders</p>
        </div>

        {/* Filters & Search */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search orders..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setSearchTerm("")}>
            <RefreshCw className="h-4 w-4" />
            Reset Filters
          </Button>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                {Array(5).fill(null).map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            ) : displayedOrders.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Restaurant</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          {order.customerName}
                          <div className="text-sm text-gray-500">{order.customerPhone}</div>
                        </div>
                      </TableCell>
                      <TableCell>{order.restaurantName}</TableCell>
                      <TableCell>{formatDate(order.createdAt)}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(order.status)}>
                          {order.status.replace(/-/g, " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          defaultValue={order.status}
                          onValueChange={(value: any) => handleStatusChange(order.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Change status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="preparing">Preparing</SelectItem>
                            <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-lg font-medium">No orders found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminOrders;
