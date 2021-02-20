import {React} from "react";
import styles from "./card.module.css";
import {IMAGE_BASE_URL} from '../environments/environments';

const card = ({title, poster_path, overview, vote_average}) => {
    return (
            <img 
            src={IMAGE_BASE_URL + poster_path}
            alt={title} 
            className={styles.Img}>
            </img>
        
    )
}

export default card;