import { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { Product } from '../types/product';
import { CartItem } from '../types/cart';

interface CartProviderProps {
  children: ReactNode;
}

interface ContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

// CartContext provides a global state for managing the cart items in the application
// This allows components to add, remove, and update cart items and the total cart price.
export const CartContext = createContext({} as ContextProps);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')!)
      : [],
  );

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (product: Product) => {
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem.product.id === product.id,
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                price: cartItem.price + product.price,
              }
            : cartItem,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        { product, quantity: 1, price: product.price },
      ]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.product.id !== item.product.id),
    );
  };

  const updateQuantity = (item: CartItem, quantity: number) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.product.id === item.product.id
          ? {
              ...cartItem,
              quantity: quantity,
              price: quantity * cartItem.product.price,
            }
          : cartItem,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
