import { Component } from "react";

class Home extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <section className="home" id="home">
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>spicy noodles</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  natus dolor cumque?
                </p>
                <a href="#n" className="btn">
                  order now
                </a>
              </div>
              <div className="image">
                <img src="images/home-img-1.png" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>fried chicken</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  natus dolor cumque?
                </p>
                <a href="#n" className="btn">
                  order now
                </a>
              </div>
              <div className="image">
                <img src="images/home-img-2.png" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>hot pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  natus dolor cumque?
                </p>
                <a href="#n" className="btn">
                  order now
                </a>
              </div>
              <div className="image">
                <img src="images/home-img-3.png" alt="" />
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    );
  }
}

export default Home;
