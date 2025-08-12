import { memo, type FC } from "react";
import uzumCard from "../assets/uzum-card.svg";
import starImg from "../assets/star.svg";
import heartImg from "../assets/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../lib/features/wishlistSlice";
import type { IProduct } from "../types";
import type { RootState } from "../lib";
import "../pages/home/index.css";
import { FaHeart } from "react-icons/fa6";

interface IProps {
  products: IProduct[];
}

const ProductView: FC<IProps> = ({ products }) => {
  const dispatch = useDispatch();
  const { value: wishList } = useSelector((state: RootState) => state.wishlist);

  return (
    <div className="home__wrapper__cards">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <div className="card__img">
            <div className="card__img__product">
              <img src={product.photos[0].link.low} alt="" />
            </div>
            <div
              className="card__img__like"
              onClick={() => dispatch(toggleWishlist(product))}
            >
              {wishList.filter((item) => item.id === product.id).length ===
              1 ? (
                <FaHeart className="liked like" />
              ) : (
                <img className="like" src={heartImg} />
              )}
            </div>
          </div>
          <div className="card__body">
            <h3 className="discount-price">
              {product.discount.discountPrice}
              <img src={uzumCard} alt="" />
            </h3>
            <p className="price">{product.minSellPrice}</p>
            <p className="price-pre-month">
              {product.badges[product.badges.length - 1].text}
            </p>
            <p className="title">{product.title}</p>
            <p className="feedbacks">
              <img src={starImg} alt="" />
              4.9 (34473 sharhlar)
            </p>
            <button className="cart-button">Savatga</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductView);
