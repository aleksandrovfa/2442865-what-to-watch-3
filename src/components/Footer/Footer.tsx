import { redirect } from 'react-router-dom';
import Logo from '../Logo/Logo.tsx';

export default function Footer(): JSX.Element {
  return(
  <footer className="page-footer">
    <Logo isLight />
    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>)
};