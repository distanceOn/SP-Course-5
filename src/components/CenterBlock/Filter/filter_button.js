export default function FilterButton(props) {
  const classes = 'filter__button _btn-text'
  return <div className={`${classes} ${props.class}`}>{props.filter}</div>
}
