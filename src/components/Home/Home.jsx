import Banner from "../Banner/Banner.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./Home.module.css";
import {Link} from "react-router-dom";

function Home() {

    return (
        <div className="homeMain">
            <div className={styles.header}>
                <Link
                    to="/"
                    onClick={() => {
                    }}
                    className={styles.logo}
                >
                    Pet Care
                </Link>
            </div>
            <Banner/>
            <Footer/>
        </div>
    )
    
}


export default Home;