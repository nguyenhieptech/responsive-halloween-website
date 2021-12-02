import Slider from 'react-slick';
import { useWindowSize } from '../../../hooks/useWindowSize';
import new1Img from '../../../img/new1-img.png';
import new2Img from '../../../img/new2-img.png';
import new3Img from '../../../img/new3-img.png';
import new4Img from '../../../img/new4-img.png';
import new5Img from '../../../img/new5-img.png';
import new6Img from '../../../img/new6-img.png';

function NewArrivals() {
  const size = useWindowSize();

  const settings = {
    dots: true,
    speed: 700,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // Method #4: Use ! non-null assertion operator
    // https://linguinecode.com/post/how-to-solve-typescript-possibly-undefined-value
    slidesToShow: size.width! >= 767 ? 3 : 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    appendDots: (dots: any) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="section arrivals" id="arrivals">
      <h2 className="section__title">New Arrivals</h2>

      <div className="arrivals__container container">
        <Slider {...settings}>
          <div className="arrivals__data">
            <div className="tag">New</div>
            <img className="img" src={new1Img} alt="" />
            <h3 className="title">Haunted House</h3>
            <span className="subtitle">Accessory</span>

            <div className="prices">
              <span className="price">$14.99</span>
              <span className="discount">$29.99</span>
            </div>

            <button className="button arrivals__button">
              <i className="bx bx-cart-alt icon" />
            </button>
          </div>

          <div className="arrivals__data">
            <div className="tag">New</div>
            <img className="img" src={new2Img} alt="" />
            <h3 className="title">Haunted House</h3>
            <span className="subtitle">Accessory</span>

            <div className="prices">
              <span className="price">$14.99</span>
              <span className="discount">$29.99</span>
            </div>

            <button className="button arrivals__button">
              <i className="bx bx-cart-alt icon" />
            </button>
          </div>

          <div className="arrivals__data">
            <div className="tag">New</div>
            <img className="img" src={new3Img} alt="" />
            <h3 className="title">Haunted House</h3>
            <span className="subtitle">Accessory</span>

            <div className="prices">
              <span className="price">$14.99</span>
              <span className="discount">$29.99</span>
            </div>

            <button className="button arrivals__button">
              <i className="bx bx-cart-alt icon" />
            </button>
          </div>

          <div className="arrivals__data">
            <div className="tag">New</div>
            <img className="img" src={new4Img} alt="" />
            <h3 className="title">Haunted House</h3>
            <span className="subtitle">Accessory</span>

            <div className="prices">
              <span className="price">$14.99</span>
              <span className="discount">$29.99</span>
            </div>

            <button className="button arrivals__button">
              <i className="bx bx-cart-alt icon" />
            </button>
          </div>

          <div className="arrivals__data">
            <div className="tag">New</div>
            <img className="img" src={new5Img} alt="" />
            <h3 className="title">Haunted House</h3>
            <span className="subtitle">Accessory</span>

            <div className="prices">
              <span className="price">$14.99</span>
              <span className="discount">$29.99</span>
            </div>

            <button className="button arrivals__button">
              <i className="bx bx-cart-alt icon" />
            </button>
          </div>

          <div className="arrivals__data">
            <div className="tag">New</div>
            <img className="img" src={new6Img} alt="" />
            <h3 className="title">Haunted House</h3>
            <span className="subtitle">Accessory</span>

            <div className="prices">
              <span className="price">$14.99</span>
              <span className="discount">$29.99</span>
            </div>

            <button className="button arrivals__button">
              <i className="bx bx-cart-alt icon" />
            </button>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default NewArrivals;
