export default function NavLogo(props) {
  return (
    <div className="nav__logo logo">
      <img className="logo__image" src={props.src} alt={props.alt} />
    </div>
  )
}
