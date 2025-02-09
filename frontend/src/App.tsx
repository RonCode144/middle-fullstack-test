import { ProductProvider } from './store/ProductContext';
import RegisterProduct from './pages/RegisterProduct';
import RegisterInventoryMovements from './pages/RegisterInventoryMovements';

const App = () => {
  return (
    <ProductProvider>
      <RegisterProduct />
      <RegisterInventoryMovements />
    </ProductProvider>
  );
};

export default App;
