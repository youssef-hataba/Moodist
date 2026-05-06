import { useState, useEffect, useCallback } from 'react';
import api from '../lib/api';

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  customDesignUrl?: string | null;
  customText?: string | null;
  product: {
    title: string;
    basePrice: number;
    images: { url: string }[];
  };
  variant?: {
    size: string;
    color: string;
    price: number | null;
  };
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get('/cart');
      if (res.data) {
        setCartItems(res.data.items || []);
        // Calculate total amount
        const total = (res.data.items || []).reduce((acc: number, item: any) => {
          const price = item.variant?.price || item.product.basePrice;
          return acc + price * item.quantity;
        }, 0);
        setTotalAmount(total);
      }
    } catch (err) {
      console.error('Failed to fetch cart', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (productId: string, variantId: string, quantity: number, customDesignUrl?: string | null, customText?: string | null) => {
    try {
      await api.post('/cart/add', { productId, variantId, quantity, customDesignUrl, customText });
      await fetchCart();
    } catch (err) {
      console.error('Add to cart failed', err);
      throw err;
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      await api.patch(`/cart/item/${itemId}`, { quantity });
      await fetchCart();
    } catch (err) {
      console.error('Update quantity failed', err);
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      await api.delete(`/cart/item/${itemId}`);
      await fetchCart();
    } catch (err) {
      console.error('Remove item failed', err);
    }
  };

  return {
    cartItems,
    loading,
    totalAmount,
    refreshCart: fetchCart,
    addToCart,
    updateQuantity,
    removeItem
  };
};
