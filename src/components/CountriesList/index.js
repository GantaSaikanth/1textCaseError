import './index.css'

const CountriesList = props => {
  const {countries, onClickVisited} = props
  const {id, name, isVisited} = countries

  const onClickBtn = () => {
    onClickVisited(id)
  }

  return (
    <>
      <li className="lists">
        <p className="country">{name}</p>
        {isVisited ? (
          <p className="visited-para">Visited</p>
        ) : (
          <button className="visit-btn" onClick={onClickBtn} type="button">
            Visit
          </button>
        )}
      </li>
      <hr className="line" />
    </>
  )
}

export default CountriesList
