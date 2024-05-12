import React, { useEffect, useState } from "react";
import Hero from '../../components/hero/Hero'
import Section from '../../components/section/Section'
import Product from '../../components/product/Product'
import axios from "../../api";
import Footerbr from "../../components/footerbr/Footerbr";
import Footerbanner from "../../components/footerbanner/Footerbanner";

const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(8);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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
            <Product data={data} />
            <div className="container">
                <button onClick={() => setCount(p => p + 4)} className='btn-see'>See more</button>
            </div>
            <Footerbr />
            <Footerbanner />
        </>
    )
}

export default Home