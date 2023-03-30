import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]); //when endpoint is changing call function

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    };

    return { data };
};
export default useFetch;