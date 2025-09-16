import axios from "axios";
import {Product} from "@/shared/types/product";

export const LIKES_KEY = "favorites_products";

export const likePatch = async (product: Product, val: boolean)=>{
    const response = await axios.patch(`http://localhost:3000/products/${product.id}`, {
        liked: val
    })

    const changedProduct = {
        ...product,
        liked: val
    }
    const existing: Product[] = JSON.parse(localStorage.getItem(LIKES_KEY) || '[]');

    if (val) {
        if (!existing.find(p => p.id === product.id)) {
            existing.push(changedProduct);
        }
    } else {
        const index = existing.findIndex(p => p.id === product.id);
        if (index !== -1) {
            existing.splice(index, 1);
        }
    }

    localStorage.setItem(LIKES_KEY, JSON.stringify(existing));
}

export const getLiked = ()=>{
    const existing: Product[] = JSON.parse(localStorage.getItem(LIKES_KEY) || '[]');
    return existing
}