
import React, { useState, useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, ShoppingBag, Store, DollarSign } from "lucide-react";
import { restaurants } from "@/data/restaurants";
import { orders, getRecentOrders } from "@/data/orders";

// Chart data for demonstration
const salesData = [
  { name: "Mon", total: 340 },
  { name: "Tue", total: 480 },
  { name: "Wed", total: 520 },
  { name: "Thu", total: 390 },
  { name: "Fri", total: 620 },
  { name: "Sat", total: 780 },
  { name: "Sun", total: 510 },
];

const Admin = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [timeframe, setTimeframe] = useState("week");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    setTimeout(() => {
      setRecentOrders(getRecentOrders(5));
      setIsLoading(false);
    }, 500);
  }, []);

  // Metrics calculations
  const totalRestaurants = restaurants.length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue = totalRevenue / totalOrders;

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Overview of your food delivery platform</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Orders */}
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-500 mr-4">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                <h3 className="text-2xl font-bold">{totalOrders}</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Total Restaurants */}
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-500 mr-4">
                <Store className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Restaurants</p>
                <h3 className="text-2xl font-bold">{totalRestaurants}</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.3% from last month
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Revenue */}
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-500 mr-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <h3 className="text-2xl font-bold">${totalRevenue.toFixed(2)}</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18.2% from last month
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Average Order Value */}
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-500 mr-4">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Order Value</p>
                <h3 className="text-2xl font-bold">${averageOrderValue.toFixed(2)}</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.1% from last month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Sales Overview Chart */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip />
                  <Bar dataKey="total" fill="#FF5A5F" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button asChild variant="ghost" size="sm">
                <Link to="/admin/orders">
                  View all <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {Array(5).fill(null).map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {recentOrders.map((order: any) => (
                    <div key={order.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{order.customerName}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <p>{order.restaurantName}</p>
                          <Separator orientation="vertical" className="mx-2 h-4" />
                          <p>${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      <Badge variant={
                        order.status === "delivered" ? "outline" :
                        order.status === "out-for-delivery" ? "secondary" :
                        order.status === "preparing" ? "default" :
                        "destructive"
                      }>
                        {order.status.replace(/-/g, " ")}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
