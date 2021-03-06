import React from 'react';
import PropTypes from 'prop-types';
// import { AppBar } from 'react-toolbox';
import { Link } from 'react-router';
import Logo from '../logo';
import Navigation from '../navigation';
import style from './style.styl';

const MainAppBar = (props) => {
  let className = style.appbar;
  if (props.className) className += ` ${props.className}`;

  return (
    <nav className={className} flat fixed>
      <Link to="/">
        <Logo className={style.logo} />
      </Link>
      {/* <Navigation activeClassName={style.active} className={style.navigation} /> */}
    </nav>
  );
};

MainAppBar.propTypes = {
  className: PropTypes.string
};

MainAppBar.defaultProps = {
  className: ''
};

export default MainAppBar;
