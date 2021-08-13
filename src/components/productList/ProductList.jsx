import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setProducts } from "../../redux/actions/productsActions";
import Products from '../product/Products';

export default function ProductList() {

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error: ", err);
            });

        dispatch(setProducts(response.data));

    };


    useEffect(() => {
        fetchProducts();

    }, []);


    return (
        <div className="ui grid container">
            <Products />
        </div>
    )
}
