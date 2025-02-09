import axios from 'axios';

class registerProduct {
  
private api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000', // URL del backend
});

// Product Register
public registerProducts = async (product: number) => {
  const response = await this.api.post('/products', product);
  return response.data;
};

// Inventory Movement Register
public inventoryMovementRegistration = async (movement: number) => {
  const response = await this.api.post('/inventory-movements', movement);
  return response.data;
};

// Get all products
public getProducts = async (): Promise<number[]> => {
  const response = await this.api.get('/products');
  return response.data;
};

// Get all inventory-movements
public getInventoryMovements = async () => {
  const response = await this.api.get('/inventory-movements');
  return response.data;
};

}

export default registerProduct;
