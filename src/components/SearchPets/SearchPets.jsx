import React, { useState, useMemo } from "react";
import { Card, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchPets.module.css";


function SearchPets() {
    const [species, setSpecies] = useState("dog");
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const cachedDescriptions = useMemo(() => {
        return searchResults.map((pet) => ({
            id: pet.id,
            description: pet.temperament || "No description.",
        }));
    }, [searchResults]);

    const handleSearch = async () => {
        if (!searchValue) {
            setPopupMessage("Type a breed!");
            setShowPopup(true);
            setSearchResults([]);
            return;
        }

        try {
            let url = "";
            if (species === "dog") {
                url = `https://api.thedogapi.com/v1/breeds/search?q=${searchValue}`;
            } else if (species === "cat") {
                url = `https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`;
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
            // eslint-disable-next-line no-unused-vars
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

            <div className="d-flex flex-wrap gap-3 mt-3">
                {searchResults.map((pet) => (
                    <Card key={pet.id} style={{ width: "18rem" }}>
                        {getImageUrl(pet) && (
                            <Card.Img
                                variant="top"
                                src={getImageUrl(pet)}
                                alt={pet.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                        )}
                        <Card.Body>
                            <Card.Title>{pet.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {species === "dog" ? "Dog" : "Cat"}
                            </Card.Subtitle>
                            <Card.Text>
                                <strong>Expectativa de vida:</strong>{" "}
                                {pet.life_span || "Not informed"} <br />
                                <strong>Descrição:</strong>{" "}
                                {cachedDescriptions.find((d) => d.id === pet.id)?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SearchPets;
