import './Country.css';
import { useState, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import  {showAllCountries} from 'features/countries/countriesAction';
// import {reset} from 'features/countries/countriesSlice'

const Country = () => {
  const { countriesData, loading, success, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries)

    if (success) {
      setCountryData(countriesData);
    }

    if (error) {
      console.log(error)
    }
  }, [dispatch, error, success]);
  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countryData.length > 0 &&
        countryData.map((item) => (
          <div className="country-card" key={item.name}>
            <img src={item.flag.png} alt={item.flag.alt} className="country-image" />
            <div className="country-content">
              <h3>{item.name}</h3>
              <p>
                Population: <span>{item.population}</span>
              </p>
              <p>
                Region: <span>{item.region}</span>
              </p>
              <p>
                Capital: <span>{item.capital}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  )
};

export default Country;