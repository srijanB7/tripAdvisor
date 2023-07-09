import { useContext } from "react";
import { TripContext } from "../context/TripContext";

import { Link } from "react-router-dom";

export const Home = () => {
    const { continents } = useContext(TripContext);
    return (
        <div>
            <div>
                <h1>Welcome to Trip Advisor</h1>
                <h2>Top Continents for your next holiday</h2>
            </div>
            <div className="container">
                {continents.map((continent) => (
                    <Link to={`/${continent.name}`} key={continent.id}>
                        <img src={continent.image} />
                        <p>{continent.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
