import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import config from '../../config';
import css from './Logo.css';
import LogoImageMobile from './whichost-logo-mobile.png';
import LogoImage from './whichost-logo.png';


const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  if (format === 'desktop') {
    return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
  }

  return <img src={LogoImageMobile} alt={config.siteTitle} className={mobileClasses} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
