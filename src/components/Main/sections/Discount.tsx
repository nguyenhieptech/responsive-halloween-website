import discountImg from '../../../img/discount-img.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function Discount() {
  return (
    <ScrollRevealAnimation>
      <section className="section">
        <div className="discount__container container grid">
          <div className="discount__data">
            <h2 className="title">
              50% Discount <br /> On New Products
            </h2>
            <a className="button" href="#">
              Go to new
            </a>
          </div>

          <img className="discount__img" src={discountImg} alt="" />
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default Discount;
