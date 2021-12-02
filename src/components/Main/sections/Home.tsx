import Slider from 'react-slick';
import home1Img from '../../../img/home1-img.png';
import home2Img from '../../../img/home2-img.png';
import home3Img from '../../../img/home3-img.png';

function Home() {
  const settings = {
    dots: true,
    speed: 700,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    appendDots: (dots: any) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
  };

  // https://react-slick.neostack.com/docs/example/auto-play
  // https://react-slick.neostack.com/docs/example/append-dots

  const sliderContent = [
    {
      group: {
        img: home1Img,
        title: `The Labu “Reiza”`,
        subtitle: 'The Living Pumpkin',
      },
      data: {
        subtitle: '#1 Top Scariest Ghost',
        title: 'UOOOO TRICK OR TREAT!!',
        description: `Hi, I'm Reiza, people call me "El Labu". I am currently trying
        to learn something new, building my own bike with parts made
        only in Singapore.`,
      },
    },
    {
      group: {
        img: home2Img,
        title: `Adino & Grahami`,
        subtitle: 'No words can describe them',
      },
      data: {
        subtitle: '#2 Top Best Duo',
        title: 'BRING BACK MY COTTON CANDY',
        description: `Adino steals cotton candy from his brother and eats them all in
        one bite, a hungry beast. Grahami can no longer contain his anger
        towards Adino.`,
      },
    },
    {
      group: {
        img: home3Img,
        title: 'Captain Sem',
        subtitle: 'Veteran Spooky Ghost',
      },
      data: {
        subtitle: '#3 Top Scariest Ghost',
        title: 'RESPAWN THE SPOOKY SKULL',
        description: `In search for cute little puppy, Captain Sem has come back from
        his tragic death. With his hogwarts certified power he promise to
        be a hero for all of ghostkind.`,
      },
    },
  ];

  return (
    <section className="home container" id="home">
      <Slider {...settings}>
        {sliderContent.map((content, index) => {
          const { group, data } = content;

          return (
            <div className="home__content grid" key={index}>
              <div className="home__group">
                <img className="img" src={group.img} alt="" />
                <div className="indicator" />
                <div className="info">
                  <h4 className="title">{group.title}</h4>
                  <span className="subtitle">{group.subtitle}</span>
                </div>
              </div>

              <div className="home__data">
                <h3 className="subtitle">{data.subtitle}</h3>
                <h2 className="title">{data.title}</h2>
                <p className="description">{data.description}</p>
                <div className="buttons">
                  <a className="button" href="#">
                    Book Now
                  </a>
                  <a className="button--link button--flex" href="#">
                    Track Record
                    <i className="bx bx-right-arrow-alt button__icon" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Home;
