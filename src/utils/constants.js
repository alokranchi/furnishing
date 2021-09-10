import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Nothing but the best for you.You’ll find gorgeous furniture and home decor in a wide variety of styles, plus fast (and often free!) shipping. Some of these retailers you’d expect to see (Target, IKEA, Crate & Barrel, etc.), but others (like Home Depot and Etsy) might come as a surprise.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'We hope to make furniture shopping a piece of cake for you. Sitting at home wondering where to buy furniture online? There are tons of online furniture stores, if you can handle a few thrilling hours of scrolling and searching hundreds of different sites & brands.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'It all started when we were shopping for some furniture & realised it was so hard to compare prices, discounts & materials of furniture accross different sites of brands & wished we could find them all in one place. So we went ahead to create it for you.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
