import Nav from "../../components/Nav/Nav";
import "./SearchSite_Results.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

const SearchSite_Results = () => {
    const [searchValue, setSearchValue] = useState("");
    const [myData, setMyData] = useState();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then((response) => response.json())
            .then((data) => setMyData(data))
            .catch((error) => console.log("An error has occured", error));
    }, [searchValue]);

    console.log("My Data", myData);
    return (
        <>
            <div className="searchResultsContainer">
                <SearchBar setSearchValue={setSearchValue} />
                {myData ? (
                    <p>
                        <ul>
                            {myData.meals.map((meal, index) => (
                                <div key={index} className="tile">
                                    <img src={meal.strSource} alt={`image of ${meal.strMeal}`} />
                                </div>
                            ))}
                        </ul>
                    </p>
                ) : (
                    <h2 style={{ color: "red" }}>No Data found. Try again</h2>
                )}
            </div>

            <Nav />
        </>
    );
};

export default SearchSite_Results;
