import { useContext } from "react";
import { TripContext } from "../context/TripContext";
import { useParams } from "react-router-dom";
export const DestinationDetail = () => {
    const obj = useParams();
    console.log(obj);
    const { continents } = useContext(TripContext);
    const selectedContinetCountries = continents.find(
        (currContinent) => currContinent.name === obj.continent
    ).countries;
    const selectedCountryDestinations = selectedContinetCountries.find(
        (country) => country.name === obj.country
    ).destinations;
    
    const currDestination = selectedCountryDestinations.find(destination => destination.id == obj.id);
    console.log(currDestination)

    return <div>
        <h1>{currDestination.name}</h1>
        <img src={currDestination.image} />
        <h3>Description: {currDestination.description}</h3>
        <h3>Ratings: {currDestination.ratings}</h3>
        <h3>Reviews: {currDestination.reviews}</h3>
        <h3>Location: {currDestination.location}</h3>
        <h3>Opening hours: {currDestination.openingHours}</h3>
        <h3>Ticket Price: {currDestination.ticketPrice}</h3>
        <a href={currDestination.website}>Website</a>
    </div>;
};
