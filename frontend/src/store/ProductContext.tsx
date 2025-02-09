import React, { createContext, useState, useEffect } from 'react';
import getProducts from '../services/api';

const ProductContext = createContext<number[]>([]);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await new getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={ products }>
      {children}
    </ProductContext.Provider>
  );
};
