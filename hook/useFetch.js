import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, param) => {

    const [data, setData] = useState([]);
    // default loading
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)


    const option = {
        method: 'GET',
        url: `https://rplcoffe.000webhostapp.com/${endpoint}/${param}`,
    }

    // fetch data
    const fetchData = async () => {
        // loading screen saat mulai
        setIsLoading(true);

        try {
            const response = await axios.request(option);
            setData(response.data.data);
        } catch (error) {
            setError(error)
            alert('Ada Error dalam API');
        } finally{
            // jika ada error atau data bisa diambil
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // fetch ulang, karena kadang data saat req lagi tidak termulai 
    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, reFetch}
}

export default useFetch