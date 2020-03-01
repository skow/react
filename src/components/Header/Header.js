import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore.js';

class Header extends React.Component {
  render(){
    const {homeLink, infoLink, faqLink, icon} = settings.header;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{homeLink}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{infoLink}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faqLink}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;