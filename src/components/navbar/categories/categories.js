import React from 'react';
import axios from '../../../axios/axios';

function categories(fetchUrl) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const cat = await axios.get(fetchUrl);
            console.log(cat)
        }
        getCategories();
    }, [])

    return (
        <div>
            <ul>
            </ul>
        </div>
    )
}

export default categories;