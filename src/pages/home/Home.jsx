import React, { useEffect, useState } from "react";
import Hero from '../../components/hero/Hero'
import Section from '../../components/section/Section'
import Product from '../../components/product/Product'
import axios from "../../api";
// import Skeleton from "../../components/skeleton/Skeleton"; // Update the path to your Skeleton component

const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(4);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios
            .get(`/products?limit=${count}`)
            .then((res) => {
                setData(res.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [count]);

    return (
        <>
            <Hero />
            <Section />
            <Product title="BEST SELLER" data={data} />
        </>
    )
}

export default Home