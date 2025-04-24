
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minimumOrder: number;
  image: string;
  description: string;
  address: string;
  openingHours: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    minimumOrder: 15,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Authentic Italian cuisine with handmade pasta and wood-fired pizzas.",
    address: "123 Main St, Foodville",
    openingHours: "10:00 AM - 10:00 PM",
  },
  {
    id: "2",
    name: "Sushi Palace",
    cuisine: "Asian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    minimumOrder: 20,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    description: "Premium sushi and Japanese dishes made with the freshest ingredients.",
    address: "456 Oak Ave, Foodville",
    openingHours: "11:00 AM - 11:00 PM",
  },
  {
    id: "3",
    name: "Burger Joint",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minimumOrder: 10,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    description: "Juicy burgers, crispy fries, and creamy milkshakes - the American classic.",
    address: "789 Burger Blvd, Foodville",
    openingHours: "11:00 AM - 12:00 AM",
  },
  {
    id: "4",
    name: "Taj Mahal",
    cuisine: "Indian",
    rating: 4.8,
    deliveryTime: "35-45 min",
    minimumOrder: 18,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: "Rich and flavorful Indian curries, biryanis, and fresh naan bread.",
    address: "101 Spice Road, Foodville",
    openingHours: "12:00 PM - 10:00 PM",
  },
  {
    id: "5",
    name: "Falafel House",
    cuisine: "Middle Eastern",
    rating: 4.6,
    deliveryTime: "25-35 min",
    minimumOrder: 15,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: "Authentic Middle Eastern cuisine with fresh ingredients and traditional recipes.",
    address: "234 Cedar St, Foodville",
    openingHours: "10:00 AM - 9:00 PM",
  },
  {
    id: "6",
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.4,
    deliveryTime: "30-40 min",
    minimumOrder: 20,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    description: "Handmade pasta dishes with authentic Italian sauces and fresh ingredients.",
    address: "567 Pasta Lane, Foodville",
    openingHours: "11:00 AM - 10:00 PM",
  },
  {
    id: "7",
    name: "Noodle House",
    cuisine: "Asian",
    rating: 4.2,
    deliveryTime: "20-30 min",
    minimumOrder: 12,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    description: "Authentic Asian noodle dishes from across East Asia.",
    address: "890 Rice Road, Foodville",
    openingHours: "11:00 AM - 11:00 PM",
  },
  {
    id: "8",
    name: "Grill & Chill",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "25-35 min",
    minimumOrder: 15,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmJxfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    description: "Grilled steaks, ribs, and burgers with homemade sauces and sides.",
    address: "321 Grill Street, Foodville",
    openingHours: "12:00 PM - 10:00 PM",
  },
  {
    id: "9",
    name: "Curry Corner",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    minimumOrder: 18,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: "Delicious Indian curries and tandoori specialties.",
    address: "654 Curry Avenue, Foodville",
    openingHours: "12:00 PM - 10:00 PM",
  },
  {
    id: "10",
    name: "Shawarma King",
    cuisine: "Middle Eastern",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minimumOrder: 15,
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    description: "Authentic shawarma, kebabs, and Middle Eastern appetizers.",
    address: "987 Pita Street, Foodville",
    openingHours: "10:00 AM - 12:00 AM",
  },
];

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id);
};

export const getRestaurantsByCuisine = (cuisine: string): Restaurant[] => {
  if (!cuisine) return restaurants;
  return restaurants.filter(restaurant => restaurant.cuisine.toLowerCase() === cuisine.toLowerCase());
};

export const searchRestaurants = (query: string): Restaurant[] => {
  const lowercaseQuery = query.toLowerCase();
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(lowercaseQuery) || 
    restaurant.cuisine.toLowerCase().includes(lowercaseQuery)
  );
};
