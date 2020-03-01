import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqData} from '../../data/dataStore.js';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <p>{faqData.description}</p>
  </Container>
);

export default Faq;