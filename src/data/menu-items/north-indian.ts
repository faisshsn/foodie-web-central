
import { MenuItem } from './types';

export const northIndianItems: MenuItem[] = [
  // Spice Garden (id: 1)
  {
    id: "101",
    restaurantId: "1",
    name: "Butter Chicken",
    description: "Tender chicken pieces in a rich and creamy tomato-based sauce.",
    price: 320,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    popular: true,
  },
  {
    id: "102",
    restaurantId: "1",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection in a tandoor.",
    price: 280,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Starters",
    vegetarian: true,
    popular: true,
  },
  // Punjabi Dhaba (id: 3)
  {
    id: "301",
    restaurantId: "3",
    name: "Amritsari Kulcha",
    description: "Stuffed bread with spiced potato filling, a specialty of Punjab.",
    price: 120,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Breads",
    vegetarian: true,
    popular: true,
  },
  // Lucknowi Darbar (id: 13)
  {
    id: "1301",
    restaurantId: "13",
    name: "Lucknowi Biryani",
    description: "Fragrant rice cooked with meat and saffron in the dum style.",
    price: 360,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Rice",
    popular: true,
  },
  {
    id: "1302",
    restaurantId: "13",
    name: "Galawati Kebab",
    description: "Melt-in-mouth minced meat kebabs with aromatic spices.",
    price: 320,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ViYWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Starters",
    popular: true,
  },
  // Parsi Delight (id: 18)
  {
    id: "1801",
    restaurantId: "18",
    name: "Dhansak",
    description: "Lentils and vegetables cooked with meat, served with caramelized rice.",
    price: 360,
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhdCUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    popular: true,
  },
  // Sindhi Delight (id: 23)
  {
    id: "2301",
    restaurantId: "23",
    name: "Sindhi Kadhi",
    description: "Gram flour curry with vegetables, served with rice.",
    price: 220,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FkaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    vegetarian: true,
    popular: true,
  },
  // Bohri Kitchen (id: 24)
  {
    id: "2401",
    restaurantId: "24",
    name: "Bohri Thaal",
    description: "Traditional Bohri communal dining platter with multiple dishes.",
    price: 450,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9ocmklMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    popular: true,
  },
  // Bihari Pakwan (id: 25)
  {
    id: "2501",
    restaurantId: "25",
    name: "Litti Chokha",
    description: "Baked wheat flour balls with roasted eggplant mash.",
    price: 180,
    image: "https://images.unsplash.com/photo-1609711029045-14661f5814e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmloYXJpJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    vegetarian: true,
    popular: true,
  },
  // Additional items for these restaurants (adding sample items to ensure at least 10 per restaurant category)
  {
    id: "103",
    restaurantId: "1",
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked with butter and cream.",
    price: 220,
    image: "https://images.unsplash.com/photo-1626415700275-b3903fdb4061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    vegetarian: true,
  },
  {
    id: "104",
    restaurantId: "1",
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor.",
    price: 340,
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Main Course",
    popular: true,
  }
];
