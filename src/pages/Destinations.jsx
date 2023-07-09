import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TripContext } from "../context/TripContext";
import { Link } from "react-router-dom";
export const Destinations = () => {
    const { continents } = useContext(TripContext);
    const obj = useParams();
    const selectedContinetCountries = continents.find(
        (currContinent) => currContinent.name === obj.continent
    ).countries;
    const selectedCountryDestinations = selectedContinetCountries.find(
        (country) => country.name === obj.country
    ).destinations;
    //console.log(selectedCountry);

    return (
        <div>
            <h1>Top Destinations in {obj.country} for your next holiday</h1>
            <div className="container">
                {selectedCountryDestinations.map((destination) => (
                    <Link
                        to={`/${obj.continent}/${obj.country}/${destination.id}`}
                        key={destination.id}
                    >
                        <img src={destination.image} />
                        <p>{destination.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
