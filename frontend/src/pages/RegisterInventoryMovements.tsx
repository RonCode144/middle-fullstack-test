import React, { useState, useEffect } from 'react';
import inventoryMovementRegistration from '../services/api';
import getProducts from '../services/api';
import { Product } from '../interfaces/Product.dto';

const RegisterInventoryMovement = () => {
  const [productId, setProductId] = useState('');
  const [type, setType] = useState('entry');
  const [quantity, setQuantity] = useState(0);
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await new getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      new inventoryMovementRegistration();
      alert('Register successfully!');
      setProductId('');
      setType('entry');
      setQuantity(0);
    } catch (error: unknown) {
      alert('Error to try register: ' + error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Inventory Movement Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Product</label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Choose a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="entry">Entry</option>
            <option value="exit">Exit</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterInventoryMovement;