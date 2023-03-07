function MenuLink(props) {
  return (
    <li className="menu__item">
      <a className="menu__link" href={props.href}>
        {props.target}
      </a>
    </li>
  )
}

export default function MenuRender() {
  const menu = document.querySelector('.nav__menu')

  return menu.render(
    <ul className="menu__list">
      <MenuLink href="http://" target="Главное" />
      <MenuLink href="http://" target="Мой плейлист" />
      <MenuLink href="http://" target="Войти" />
    </ul>
  )
}
