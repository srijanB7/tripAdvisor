import { useContext } from "react"
import { useParams } from "react-router-dom"
import { TripContext } from "../context/TripContext";
import { Link } from "react-router-dom";
export const CountryCategory = () => {
    const continent = useParams(); 
    const { continents } = useContext(TripContext);
    //console.log(continents);
    const selectedContinetCountries = continents.find(currContinent => currContinent.name === continent.continent).countries
    //console.log(selectedContinet);
    return (
    <div><h1>Top Countries to visit in {continent.continent}</h1>
        <div>
            {
                selectedContinetCountries.map((countries) => (
                    <Link to={`/${continent.continent}/${countries.name}`} key={countries.id}>
                        <img src={countries.image} />
                        <p>{countries.name}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
