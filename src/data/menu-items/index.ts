
import { MenuItem } from './types';
import { northIndianItems } from './north-indian';
import { southIndianItems } from './south-indian';
import { maharashtrianItems } from './maharashtrian';
import { bengaliItems } from './bengali';
import { gujaratiItems } from './gujarati';
import { rajasthaniItems } from './rajasthani';
import { kashmiriItems } from './kashmiri';
import { goanItems } from './goan';
import { keralaItems } from './kerala';
import { northEastItems } from './northeast';

// Combine all menu items
export const menuItems: MenuItem[] = [
  ...northIndianItems,
  ...southIndianItems,
  ...maharashtrianItems,
  ...bengaliItems,
  ...gujaratiItems,
  ...rajasthaniItems,
  ...kashmiriItems,
  ...goanItems,
  ...keralaItems,
  ...northEastItems
];

// Export the type with the 'export type' syntax to fix the isolatedModules error
export type { MenuItem } from './types';

// Helper functions
export const getMenuItemsByRestaurant = (restaurantId: string): MenuItem[] => {
  return menuItems.filter(item => item.restaurantId === restaurantId);
};

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};

// Filter by cuisine function (will be used for advanced filtering later)
export const getMenuItemsByCuisine = (cuisine: string): MenuItem[] => {
  if (!cuisine) return menuItems;
  return menuItems.filter(item => {
    const restaurantIdNum = parseInt(item.restaurantId);
    
    // Map restaurant IDs to their cuisines (simplified approach)
    // This is a basic mapping - in a real app, you'd get this from restaurant data
    const cuisineMap: { [key: string]: string } = {
      "1": "north indian",
      "3": "north indian",
      "13": "north indian",
      "18": "north indian",
      "23": "north indian",
      "24": "north indian",
      "25": "north indian",
      "2": "south indian",
      "6": "south indian", 
      "9": "south indian",
      "16": "south indian",
      "20": "south indian",
      "4": "maharashtrian",
      "12": "maharashtrian",
      "17": "maharashtrian",
      "5": "bengali",
      "7": "gujarati",
      "10": "rajasthani",
      "11": "kashmiri",
      "15": "goan",
      "8": "kerala",
      "21": "kerala",
      "14": "north eastern",
      "19": "north eastern",
      "22": "north eastern"
    };
    
    return cuisineMap[item.restaurantId] === cuisine.toLowerCase();
  });
};
