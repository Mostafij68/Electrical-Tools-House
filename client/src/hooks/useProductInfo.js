import { useEffect, useState } from "react";

const useProductInfo = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `${process.env.REACT_APP_API}/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return [product, setProduct]
};

export default useProductInfo;