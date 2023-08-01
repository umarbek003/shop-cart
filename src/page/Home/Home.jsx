import Card from "../../components/Card/Card";
import CategoriesButton from "../../components/CategoriesButton/CategoriesButton";
import "./Home.scss";

const Home = ({item, onAddToCart}) => {
  return (
    <div className="content">
      <div className="container">
        <div className="block-content">
          <div className="content-title">
            <h2>Grab Upto 50% Off On Selected Headphone</h2>
            <button>Buy Now</button>
          </div>
          <img src="/img/girlheadphone.png" alt="" />
        </div>

        <div className="content-button">
          <CategoriesButton />
        </div>

        <div className="card-content-title">
          <h1>Headphones For You!</h1>
        <div className="card-content">
          {
            item.map(el =>(
              <Card key={el.id} onAddToCart={onAddToCart} product={el}/>
            ))
          }
        </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
