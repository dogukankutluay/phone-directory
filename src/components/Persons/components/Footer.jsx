import React from 'react';
import style from '../persons.module.scss';
import { PersonIcon } from '../../../assets/icon';
function Footer() {
  return (
    <div className={style.footer}>
      <PersonIcon />
    </div>
  );
}

export default Footer;
