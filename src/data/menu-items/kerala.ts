
import { MenuItem } from './types';

export const keralaItems: MenuItem[] = [
  // Kerala House (id: 8)
  {
    id: "801",
    restaurantId: "8",
    name: "Kerala Fish Curry",
    description: "Traditional fish curry with coconut milk and kokum.",
    price: 320,
    image: "https://images.unsplash.com/photo-1589647363593-687c6007569d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    popular: true,
  },
  // Malabar Express (id: 21)
  {
    id: "2101",
    restaurantId: "21",
    name: "Kerala Fish Curry",
    description: "Traditional fish curry with coconut and kokum.",
    price: 320,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    popular: true,
  },
  {
    id: "2102",
    restaurantId: "21",
    name: "Appam with Stew",
    description: "Lacy rice pancakes with vegetable or chicken stew.",
    price: 230,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Breakfast",
    popular: true,
  },
  // Additional items
  {
    id: "802",
    restaurantId: "8",
    name: "Appam with Stew",
    description: "Lacy rice pancakes served with vegetable or chicken stew.",
    price: 230,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Breakfast",
    vegetarian: true,
    popular: true,
  },
  {
    id: "803",
    restaurantId: "8",
    name: "Beef Fry",
    description: "Spicy beef dish cooked with Kerala spices and coconut pieces.",
    price: 290,
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    spicy: true,
  }
];
