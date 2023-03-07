import NavLogo from './nav_logo'
import Logo from './logo.png'
import NavBurger from './nav_burger'
import NavMenu from './Menu/nav_menu'

export default function Nav() {
  return (
    <nav className="main__nav nav">
      <NavLogo src={Logo} alt="logo" />
      <NavBurger />
      <NavMenu />
    </nav>
  )
}
