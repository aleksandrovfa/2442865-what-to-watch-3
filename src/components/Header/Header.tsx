import Logo from '../Logo/Logo.tsx';
import {ReactNode} from 'react';

type HeaderProps = {
  children?: ReactNode;
}

export default function Header(props?:HeaderProps){
  return (
  <header className="page-header film-card__head">
    <Logo />
    {props?.children}
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  </header>)
};