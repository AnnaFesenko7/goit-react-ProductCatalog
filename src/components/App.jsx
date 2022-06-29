import ProductCatalog from './ProductCatalog/ProductCatalog';
import { Gallery } from './App.styled';
export const App = () => {
  return (
    <Gallery>
      <ProductCatalog limit={9} />
    </Gallery>
  );
};
