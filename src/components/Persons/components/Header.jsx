import React from 'react';
import style from '../persons.module.scss';
import { PlusIcon, SearchIcon } from '../../../assets/icon';
function Header() {
  return (
    <div className={style.header}>
      <div className={style.top}>
        <h1>Kişiler</h1>
        <PlusIcon />
      </div>
      <div className={style.searchWrapper}>
        <SearchIcon />
        <input type="text" placeholder="#tel $isim" />
      </div>
    </div>
  );
}

export default Header;
