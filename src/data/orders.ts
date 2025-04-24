
export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  total: number;
  createdAt: string;
  estimatedDeliveryTime: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const orders: Order[] = [
  {
    id: 'ord-001',
    restaurantId: '1',
    restaurantName: 'Bella Italia',
    customerId: 'cust-001',
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    customerPhone: '555-123-4567',
    deliveryAddress: '123 Main St, Apt 4B, New York, NY 10001',
    items: [
      {
        id: '101',
        name: 'Margherita Pizza',
        price: 14.99,
        quantity: 2,
      },
      {
        id: '103',
        name: 'Tiramisu',
        price: 8.99,
        quantity: 1,
      }
    ],
    status: 'delivered',
    total: 38.97,
    createdAt: '2023-06-15T14:30:00Z',
    estimatedDeliveryTime: '30-40 min',
  },
  {
    id: 'ord-002',
    restaurantId: '2',
    restaurantName: 'Sushi Palace',
    customerId: 'cust-002',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@example.com',
    customerPhone: '555-987-6543',
    deliveryAddress: '456 Park Ave, New York, NY 10022',
    items: [
      {
        id: '201',
        name: 'Sushi Combo',
        price: 24.99,
        quantity: 1,
      },
      {
        id: '203',
        name: 'Vegetable Tempura',
        price: 12.99,
        quantity: 1,
      }
    ],
    status: 'out-for-delivery',
    total: 37.98,
    createdAt: '2023-06-16T18:45:00Z',
    estimatedDeliveryTime: '15-25 min',
  },
  {
    id: 'ord-003',
    restaurantId: '3',
    restaurantName: 'Burger Joint',
    customerId: 'cust-003',
    customerName: 'Mike Johnson',
    customerEmail: 'mike.johnson@example.com',
    customerPhone: '555-456-7890',
    deliveryAddress: '789 Broadway, New York, NY 10003',
    items: [
      {
        id: '301',
        name: 'Classic Cheeseburger',
        price: 13.99,
        quantity: 2,
      },
      {
        id: '302',
        name: 'Loaded Fries',
        price: 8.99,
        quantity: 1,
      },
      {
        id: '303',
        name: 'Chocolate Milkshake',
        price: 6.99,
        quantity: 2,
      }
    ],
    status: 'preparing',
    total: 50.95,
    createdAt: '2023-06-16T19:20:00Z',
    estimatedDeliveryTime: '25-35 min',
  },
  {
    id: 'ord-004',
    restaurantId: '4',
    restaurantName: 'Taj Mahal',
    customerId: 'cust-004',
    customerName: 'Sarah Williams',
    customerEmail: 'sarah.williams@example.com',
    customerPhone: '555-222-3333',
    deliveryAddress: '101 5th Ave, New York, NY 10003',
    items: [
      {
        id: '401',
        name: 'Butter Chicken',
        price: 18.99,
        quantity: 1,
      },
      {
        id: '402',
        name: 'Vegetable Biryani',
        price: 15.99,
        quantity: 1,
      },
      {
        id: '403',
        name: 'Garlic Naan',
        price: 4.99,
        quantity: 2,
      }
    ],
    status: 'pending',
    total: 44.96,
    createdAt: '2023-06-16T20:10:00Z',
    estimatedDeliveryTime: '35-45 min',
  },
];

export const getOrderById = (id: string): Order | undefined => {
  return orders.find(order => order.id === id);
};

export const getRecentOrders = (limit = 5): Order[] => {
  return [...orders].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, limit);
};

// Function to generate a new order ID
export const generateOrderId = (): string => {
  return `ord-${Math.floor(Math.random() * 10000).toString().padStart(3, '0')}`;
};

// Mock function to add a new order
export const addOrder = (order: Omit<Order, 'id' | 'createdAt' | 'estimatedDeliveryTime'>): Order => {
  const newOrder: Order = {
    ...order,
    id: generateOrderId(),
    createdAt: new Date().toISOString(),
    estimatedDeliveryTime: '30-45 min',
    status: 'pending',
  };

  orders.unshift(newOrder);
  return newOrder;
};

// Function to update order status
export const updateOrderStatus = (id: string, status: Order['status']): Order | undefined => {
  const orderIndex = orders.findIndex(order => order.id === id);
  if (orderIndex === -1) return undefined;

  orders[orderIndex] = {
    ...orders[orderIndex],
    status,
  };

  return orders[orderIndex];
};
