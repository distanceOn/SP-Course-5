import NavItem from './menu_item'

export default function MenuList() {
  return (
    <ul className="menu__list">
      <NavItem href="http://" name="Главное" />
      <NavItem href="http://" name="Мой плейлист" />
      <NavItem href="http://" name="Войти" />
    </ul>
  )
}
