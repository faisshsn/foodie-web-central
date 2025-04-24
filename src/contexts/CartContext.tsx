
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  restaurantId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

interface CartContextType {
  items: CartItem[];
  customerInfo: CustomerInfo | null;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  saveCustomerInfo: (info: CustomerInfo) => void;
  restaurantId: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [restaurantId, setRestaurantId] = useState<string | null>(null);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    if (restaurantId && restaurantId !== item.restaurantId && items.length > 0) {
      if (!window.confirm("Adding items from another restaurant will clear your current cart. Continue?")) {
        return;
      }
      setItems([{ ...item, quantity: 1 }]);
      setRestaurantId(item.restaurantId);
      return;
    }

    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      if (!restaurantId) {
        setRestaurantId(item.restaurantId);
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId);
      if (newItems.length === 0) {
        setRestaurantId(null);
      }
      return newItems;
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setRestaurantId(null);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const saveCustomerInfo = (info: CustomerInfo) => {
    setCustomerInfo(info);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        customerInfo,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        saveCustomerInfo,
        restaurantId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
