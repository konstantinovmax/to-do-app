import './Header.css';
import React from 'react';

function Header(props) {
  return (
    <header className="header">
        <h1 className="header__title">Сегодня</h1>
        {props.tasks.length >= 1 ? (props.taskState ? <button className="header__button" onClick={props.onEditTaskEnabled}>Править</button> : <button className="header__button" onClick={props.onEditTaskDisabled}>Отменить</button>) : ''}
    </header>
  );
}

export default Header;
