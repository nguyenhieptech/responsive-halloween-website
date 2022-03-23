import aboutImg from '../../../img/about-img.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';
import { isIOS, isAndroid } from 'react-device-detect';

function About() {
  return (
    <ScrollRevealAnimation>
      <section className="section about" id="about">
        <div className="container grid about__container">
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
            <a
              className="button"
              href={
                isIOS
                  ? 'https://apps.apple.com/us/app/simplenote/id289429962'
                  : 'https://play.google.com/store/apps/details?id=com.automattic.simplenote&gl=ru'
              }
            >
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
