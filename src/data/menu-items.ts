
export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

export const menuItems: MenuItem[] = [
  // Italian Restaurant - Bella Italia (id: 1)
  {
    id: "101",
    restaurantId: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Pizza",
    popular: true,
    vegetarian: true,
  },
  {
    id: "102",
    restaurantId: "1",
    name: "Spaghetti Carbonara",
    description: "Spaghetti with a creamy sauce of eggs, cheese, pancetta, and pepper.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Pasta",
    popular: true,
  },
  {
    id: "103",
    restaurantId: "1",
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea2756c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Dessert",
    vegetarian: true,
  },

  // Asian Restaurant - Sushi Palace (id: 2)
  {
    id: "201",
    restaurantId: "2",
    name: "Sushi Combo",
    description: "Assorted nigiri and maki sushi with fresh fish.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Sushi",
    popular: true,
  },
  {
    id: "202",
    restaurantId: "2",
    name: "Ramen",
    description: "Authentic Japanese ramen with rich broth, noodles, and toppings.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Noodles",
    popular: true,
  },
  {
    id: "203",
    restaurantId: "2",
    name: "Vegetable Tempura",
    description: "Assorted vegetables fried in a light and crispy batter.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1615361200141-f45c9253cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVtcHVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Appetizers",
    vegetarian: true,
  },

  // American Restaurant - Burger Joint (id: 3)
  {
    id: "301",
    restaurantId: "3",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Burgers",
    popular: true,
  },
  {
    id: "302",
    restaurantId: "3",
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon, sour cream, and green onions.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Sides",
  },
  {
    id: "303",
    restaurantId: "3",
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate milkshake topped with whipped cream.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlsa3NoYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Drinks",
    vegetarian: true,
  },

  // Indian Restaurant - Taj Mahal (id: 4)
  {
    id: "401",
    restaurantId: "4",
    name: "Butter Chicken",
    description: "Tender chicken pieces in a rich and creamy tomato-based sauce.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Curries",
    popular: true,
  },
  {
    id: "402",
    restaurantId: "4",
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Rice",
    vegetarian: true,
  },
  {
    id: "403",
    restaurantId: "4",
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic and butter, baked in a tandoor oven.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Breads",
    vegetarian: true,
  },

  // Middle Eastern Restaurant - Falafel House (id: 5)
  {
    id: "501",
    restaurantId: "5",
    name: "Falafel Plate",
    description: "Crispy falafel served with hummus, tahini sauce, and fresh vegetables.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Plates",
    popular: true,
    vegetarian: true,
  },
  {
    id: "502",
    restaurantId: "5",
    name: "Chicken Shawarma",
    description: "Marinated chicken wrapped in a warm pita with garlic sauce and pickles.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Wraps",
    popular: true,
  },
  {
    id: "503",
    restaurantId: "5",
    name: "Baklava",
    description: "Sweet pastry made of layers of filo filled with nuts and sweetened with syrup.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrbGF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Desserts",
    vegetarian: true,
  },
];

export const getMenuItemsByRestaurant = (restaurantId: string): MenuItem[] => {
  return menuItems.filter(item => item.restaurantId === restaurantId);
};

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};
