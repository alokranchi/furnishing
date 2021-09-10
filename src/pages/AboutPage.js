import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            It all started when we were shopping for some furniture & realised
            it was so hard to compare prices, discounts & materials of furniture
            accross different sites of brands & wished we could find them all in
            one place. So we went ahead to create it for you.
          </p>
          <p>
            Sitting at home wondering where to buy furniture online? There are
            tons of online furniture stores, if you can handle a few thrilling
            hours of scrolling and searching hundreds of different sites &
            brands.
          </p>
          <p>
            You’ll find gorgeous furniture and home decor in a wide variety of
            styles, plus fast (and often free!) shipping. Some of these
            retailers you’d expect to see (Target, IKEA, Crate & Barrel, etc.),
            but others (like Home Depot and Etsy) might come as a surprise.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
