import React from 'react';
import styles from './Hero.scss';

const myHero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img className={styles.image} src="images/space.png"></img>
  </header>
);

export default myHero;