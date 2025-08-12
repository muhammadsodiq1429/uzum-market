import { memo } from "react";
import "./index.css";
import uzumCard from "../../assets/uzum-card.svg";
import starImg from "../../assets/star.svg";
import likeImg from "../../assets/like.svg";
import { products } from "../../static";

const Home = () => {
  return (
    <section className="home">
      <div className="home__wrapper container">
        <div className="home__wrapper__cards">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="card__img">
                <img src={product.photos[0].link.low} alt="" />
                <div className="like">
                  <img src={likeImg} alt="" />
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
      </div>
    </section>
  );
};

export default memo(Home);
