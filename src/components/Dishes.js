import { useEffect, useState } from "react";
import data from "../data/dishes.json";

const Dishes = ({ auth: { authenticated } }) => {
  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState(15.9);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("dishes"))
      localStorage.setItem("dishes", JSON.stringify(data));
    setDishes(JSON.parse(localStorage.getItem("dishes")));
  }, []);

  const makeDishes = (newDishes) => {
    setDishes(newDishes);
    localStorage.setItem("dishes", JSON.stringify(newDishes));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dishName || !dishPrice) return;
    const newDishes = [
      ...dishes,
      {
        id: dishes.length + 1,
        title: dishName,
        price: dishPrice,
        image: `images/dish-${Math.ceil(Math.random() * 6)}.png`
      }
    ];
    makeDishes(newDishes);
    setDishName("");
    setDishPrice(15.9);
  };

  const dishesView =
    dishes.length > 0 ? (
      dishes.map((dish) => (
        <div className="box" key={dish.id}>
          <a href="#n" className="fas fa-heart">
            {""}
          </a>
          <a
            href="#n"
            className="fas fa-trash"
            onClick={() =>
              authenticated &&
              makeDishes(dishes.filter((d) => d.id !== dish.id))
            }
          >
            {""}
          </a>
          <img src={dish.image} alt="" />
          <h3>{dish.title}</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <span>${dish.price}</span>
          <a href="#n" className="btn">
            add to cart
          </a>
        </div>
      ))
    ) : (
      <h3 className="sub-heading">No dishes...</h3>
    );
  return (
    <section className="dishes" id="dishes">
      <h3 className="sub-heading"> our dishes </h3>
      <h1 className="heading"> popular dishes </h1>

      <div className="box-container">{dishesView}</div>

      {authenticated && (
        <section className="order" id="order">
          <h3 className="sub-heading"> add dishes </h3>
          <h1 className="heading"> make them delicious </h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="inputBox">
              <div className="input">
                <span>dish name</span>
                <input
                  type="text"
                  placeholder="enter dish name"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                />
              </div>
              <div className="input">
                <span>dish price</span>
                <input
                  type="number"
                  placeholder="enter dish price"
                  value={dishPrice}
                  onChange={(e) => setDishPrice(e.target.value)}
                  step="0.1"
                />
              </div>
            </div>

            <input type="submit" value="add" className="btn" />
          </form>
        </section>
      )}
    </section>
  );
};

export default Dishes;
