import React, { useState, useMemo, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchPets.module.css";
import Card from "../Card/Card.jsx";

function SearchPets() {
    const [species, setSpecies] = useState("dog");
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSearch = async () => {
        setPopupMessage("");

        try {
            let url = "";
            if (species === "dog") {
                url = searchValue
                    ? `https://api.thedogapi.com/v1/breeds/search?q=${searchValue}`
                    : `https://api.thedogapi.com/v1/breeds`;
            } else if (species === "cat") {
                url = searchValue
                    ? `https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`
                    : `https://api.thecatapi.com/v1/breeds`;
            }

            const response = await fetch(url);
            const data = await response.json();

            if (!data || data.length === 0) {
                setPopupMessage("No results were found. Try again!");
                setShowPopup(true);
                setSearchResults([]);
            } else {
                setSearchResults(data);
            }
        } catch (error) {
            setPopupMessage("Error when finding. Try again!");
            setShowPopup(true);
            setSearchResults([]);
        }
    };

    const getImageUrl = (pet) => {
        if (pet.reference_image_id) {
            return `https://cdn2.the${species}api.com/images/${pet.reference_image_id}.jpg`;
        }
        return null;
    };

    // 👉 Executa a busca assim que o componente montar
    useEffect(() => {
        handleSearch();
    }, [species]); // se quiser que trocando Dog/Cat também atualize

    return (
        <div className="container mt-4">
            <div className={styles.searchBarContainer}>
                <div className={styles.icon}>
                    <FaSearch />
                </div>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Type a breed..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <select
                    className={styles.toggleButtonGroup}
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
                <Button variant="primary" size="sm" onClick={handleSearch}>
                    Buscar
                </Button>
            </div>

            {showPopup && (
                <div className="alert alert-warning mt-2">{popupMessage}</div>
            )}

            <div className={styles.cardsContainer}>
                {searchResults.map((pet, idx) => (
                    <Card
                        key={pet.id || idx}
                        image={getImageUrl(pet)}
                        title={pet.name}
                        subtitle={pet.breed_group}
                        description={pet.bred_for}
                        temperament={pet.temperament}
                        lifeSpan={pet.life_span}
                        origin={pet.origin}
                        weight={pet.weight}
                        height={pet.height}
                        species={species}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchPets;
