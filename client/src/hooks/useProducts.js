import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/products`)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
    }, []);
    return [loading, products, setProducts]
};

export default useProducts;