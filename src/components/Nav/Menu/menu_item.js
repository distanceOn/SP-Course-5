export default function NavItem(props) {
  return (
    <li className="menu__item">
      <a href={props.href} className="menu__link">
        {props.name}
      </a>
    </li>
  )
}
