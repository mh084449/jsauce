import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [loaderContainerClass, setLoaderContainerClass] = useState("");
  useEffect(() => {
    setInterval(() => {
      setLoaderContainerClass("fade-out");
    }, 1500);
  }, []);
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>locations</h3>
            <a href="#n">india</a>
            <a href="#n">japan</a>
            <a href="#n">russia</a>
            <a href="#n">USA</a>
            <a href="#n">france</a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <Link to="/">home</Link>
            <Link to="/dishes">dishes</Link>
            <Link to="/about">about</Link>
            <Link to="/menu">menu</Link>
            <Link to="/reivew">reivew</Link>
            <Link to="/order">order</Link>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#n">+123-456-7890</a>
            <a href="#n">+111-222-3333</a>
            <a href="#n">email-one@gmail.com</a>
            <a href="#n">email-two@gmail.com</a>
            <a href="#n">cairo, egypt - 12345</a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#n">facebook</a>
            <a href="#n">twitter</a>
            <a href="#n">instagram</a>
            <a href="#n">linkedin</a>
          </div>
        </div>

        <div className="credit">
          {" "}
          copyright @ 2021 by <span>jsauce</span>{" "}
        </div>
      </section>
      <div class={"loader-container " + loaderContainerClass}>
        <img src="images/loader.gif" alt="" />
      </div>
    </>
  );
};

export default Footer;
