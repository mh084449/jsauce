import { useEffect, useState } from "react";
import data from "../data/menu.json";

const Menu = ({ auth: { authenticated } }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(12.9);
  const [itemDesc, setItemDesc] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("menu"))
      localStorage.setItem("menu", JSON.stringify(data));
    setMenu(JSON.parse(localStorage.getItem("menu")));
  }, []);

  const makeMenu = (newMenu) => {
    setMenu(newMenu);
    localStorage.setItem("menu", JSON.stringify(newMenu));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !itemPrice) return;
    const newMenu = [
      ...menu,
      {
        id: menu.length + 1,
        title: itemName,
        price: itemPrice,
        image: `images/menu-${Math.ceil(Math.random() * 9)}.jpg`,
        description: itemDesc
      }
    ];
    makeMenu(newMenu);
    setItemDesc("");
    setItemName("");
    setItemPrice(12.9);
  };

  const menuView =
    menu.length > 0 ? (
      menu.map((item) => (
        <div className="box">
          <div className="image">
            <img src={item.image} alt="" />
            <a
              href="#n"
              className="fas fa-trash"
              onClick={() =>
                authenticated && makeMenu(menu.filter((i) => i.id !== item.id))
              }
            >
              {""}
            </a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#n" className="btn">
              add to cart
            </a>
            <span className="price">${item.price}</span>
          </div>
        </div>
      ))
    ) : (
      <h3 className="sub-heading">No menu item...</h3>
    );

  return (
    <section className="menu" id="menu">
      <h3 className="sub-heading"> our menu </h3>
      <h1 className="heading"> today's speciality </h1>

      <div className="box-container">{menuView}</div>
      {authenticated && (
        <section className="order" id="order">
          <h3 className="sub-heading"> add menu item </h3>
          <h1 className="heading"> make it attractive </h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="inputBox">
              <div className="input">
                <span>item name</span>
                <input
                  type="text"
                  placeholder="enter item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="input">
                <span>dish price</span>
                <input
                  type="number"
                  placeholder="enter dish price"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  step="0.1"
                />
              </div>
            </div>
            <div className="inputBox">
              <div className="input">
                <span>description</span>
                <textarea
                  placeholder="enter item description"
                  id=""
                  cols="30"
                  rows="10"
                  value={itemDesc}
                  onChange={(e) => setItemDesc(e.target.value)}
                ></textarea>
              </div>
            </div>

            <input type="submit" value="add" className="btn" />
          </form>
        </section>
      )}
    </section>
  );
};

export default Menu;
