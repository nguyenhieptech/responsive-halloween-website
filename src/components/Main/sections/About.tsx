import aboutImg from '../../../img/about-img.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function About() {
  return (
    <ScrollRevealAnimation>
      <section className="section about" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title">
              About Halloween <br /> Night
            </h2>
            <p className="description">
              Night of all the saints, or all the dead, is celebrated on October
              31 and it is a very fun international celebration, this
              celebration comes from ancient origins, and is already celebrated
              by everyone.
            </p>
            <a className="button" href="#">
              Know more
            </a>
          </div>

          <img className="about__img" src={aboutImg} alt="" />
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default About;
