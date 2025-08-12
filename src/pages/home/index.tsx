import { memo } from "react";
import "./index.css";
import ProductView from "../../components/product-view";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";

const Home = () => {
  const { value: products } = useSelector((state: RootState) => state.products);
  return (
    <section className="home">
      <div className="home__wrapper container">
        <ProductView products={products} />
      </div>
    </section>
  );
};

export default memo(Home);
