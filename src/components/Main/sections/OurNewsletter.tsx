import React from 'react';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function OurNewsletter() {
  return (
    <ScrollRevealAnimation>
      <section className="section">
        <div className="newsletter__container container">
          <h2 className="section__title">Our Newsletter</h2>
          <p className="newsletter__description">
            Promotion new products and sales. Directly to your inbox
          </p>

          <form className="newsletter__form" action="">
            <input
              className="input"
              type="text"
              placeholder="Enter your email"
            />
            <button className="button">Subscribe</button>
          </form>
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default OurNewsletter;
