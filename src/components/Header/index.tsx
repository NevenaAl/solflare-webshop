import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.test}>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product/3">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
