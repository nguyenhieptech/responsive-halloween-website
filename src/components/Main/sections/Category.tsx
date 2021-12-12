import category1Img from '../../../img/category1-img.png';
import category2Img from '../../../img/category2-img.png';
import category3Img from '../../../img/category3-img.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function Category() {
  return (
    <ScrollRevealAnimation>
      <section className="section category">
        <h2 className="section__title">
          Favorite Scare <br /> Category
        </h2>

        <div className="category__container container grid">
          <div className="category__data">
            <img className="img" src={category1Img} alt="" />
            <h3 className="title">Ghosts</h3>
            <p className="description">
              Choose the ghosts, the scariest there are
            </p>
          </div>

          <div className="category__data">
            <img className="img" src={category2Img} alt="" />
            <h3 className="title">Pumpkins</h3>
            <p className="description">
              You look at the scariest pumpkins there is.
            </p>
          </div>

          <div className="category__data">
            <img className="img" src={category3Img} alt="" />
            <h3 className="title">Witch Hat</h3>
            <p className="description">
              Pick the most stylish witch hats out there.
            </p>
          </div>
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default Category;
