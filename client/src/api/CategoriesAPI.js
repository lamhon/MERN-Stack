import { useState, useEffect } from 'react';
import axios from 'axios';

function CategoriesAPI(token){
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const res = await axios.get('/api/category');
        setCategories(res.data);
    }

    useEffect(() => {
        getCategories();
    }, [token]);

    return {
        categories: [categories, setCategories]
    }
}


export default CategoriesAPI;