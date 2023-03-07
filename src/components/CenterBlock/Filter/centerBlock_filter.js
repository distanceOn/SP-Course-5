import FilterButton from './filter_button'
import FilterTitle from './filter_title'

export default function Filter() {
  return (
    <div className="centerblock__filter filter">
      <FilterTitle />
      <FilterButton class="button-author" filter="исполнителю" />
      <FilterButton class="button-year" filter="году выпуска" />{' '}
      <FilterButton class="button-genre" filter="жанру" />
    </div>
  )
}
