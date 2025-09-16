"use client"

import React, {useState} from 'react';
import Container from "@/components/Container/Container";
import LikesHeader from "./LikesHeader";
import CardList from "@/components/CardList/CardList";
import {Product} from "@/shared/types/product";
import {getLiked} from "@/services/likes/likesService";

const Likes = () => {

    const [products, setProducts] = useState<Product[]>(getLiked());

    return (
        <Container>
            <LikesHeader />
            <CardList products={products} />
        </Container>
    );
};

export default Likes;