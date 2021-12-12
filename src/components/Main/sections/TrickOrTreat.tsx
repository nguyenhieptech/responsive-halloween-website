import trickOrTreat1Img from '../../../img/trick-treat1-img.png';
import trickOrTreat2Img from '../../../img/trick-treat2-img.png';
import trickOrTreat3Img from '../../../img/trick-treat3-img.png';
import trickOrTreat4Img from '../../../img/trick-treat4-img.png';
import trickOrTreat5Img from '../../../img/trick-treat5-img.png';
import trickOrTreat6Img from '../../../img/trick-treat6-img.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function TrickOrTreat() {
  const trickOrTreatData = [
    {
      img: trickOrTreat1Img,
      title: 'Toffee',
      subtitle: 'Candy',
      price: '$11.99',
    },
    {
      img: trickOrTreat2Img,
      title: 'Bone',
      subtitle: 'Accessory',
      price: '$8.99',
    },
    {
      img: trickOrTreat3Img,
      title: 'Scarecrow',
      subtitle: 'Accessory',
      price: '$15.99',
    },
    {
      img: trickOrTreat4Img,
      title: 'Candy Cane',
      subtitle: 'Candy',
      price: '$7.99',
    },
    {
      img: trickOrTreat5Img,
      title: 'Pumpkin',
      subtitle: 'Candy',
      price: '$19.99',
    },
    {
      img: trickOrTreat6Img,
      title: 'Ghost',
      subtitle: 'Accessory',
      price: '$17.99',
    },
  ];

  return (
    <ScrollRevealAnimation>
      <section className="section" id="candy">
        <h2 className="section__title">Trick Or Treat</h2>

        <div className="trick__container container grid">
          {trickOrTreatData.map((data, index) => {
            return (
              <div className="trick__data" key={index}>
                <img className="img" src={data.img} alt={data.title} />
                <h3 className="title">{data.title}</h3>
                <span className="subtitle">{data.subtitle}</span>
                <span className="price">{data.price}</span>
                <button className="button trick__button">
                  <i className="bx bx-cart-alt trick__icon"></i>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default TrickOrTreat;
