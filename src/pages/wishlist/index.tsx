import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";
import ProductView from "../../components/product-view";

const Wishlist = () => {
  const { value: products } = useSelector((state: RootState) => state.wishlist);
  return (
    <div className="Wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist__wrapper container">
        <ProductView products={products} />
      </div>
    </div>
  );
};

export default memo(Wishlist);
