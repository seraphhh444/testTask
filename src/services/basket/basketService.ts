"use client"

import {Product} from "@/shared/types/product";

export const BASKET_KEY = 'basket';

export interface BasketItem extends Product {
    count: number;
}

export const addToBasket = (product: Product, count: number) => {
    const existing: BasketItem[] = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    const index = existing.findIndex(p => p.id === product.id);

        if( index !== -1) {
            existing[index].count += count;
        } else {
            existing.push({...product, count});
        }
    localStorage.setItem(BASKET_KEY, JSON.stringify(existing));

    return existing;
}

export const getBasket = () : BasketItem[] => {
    const existing: BasketItem[] = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    return existing;
}

export const countBasket = (): number => {
    const existing: BasketItem[] = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    return existing.reduce((total, item) => total + Number(item.count), 0);
}

export const deleteItemBasket = (item: BasketItem) => {
    const existing: BasketItem[] = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    const index = existing.findIndex(p => p.id === item.id);
    if(item.count > 1 ){
        existing[index].count -= 1;
    } else {
        existing.splice(index, 1);
    }

    localStorage.setItem(BASKET_KEY, JSON.stringify(existing));
}

export const absoluteDeleteItemBasket = (item: BasketItem) => {
    const existing: BasketItem[] = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    const index = existing.findIndex(p => p.id === item.id);
    existing.splice(index, 1);
    localStorage.setItem(BASKET_KEY, JSON.stringify(existing));
}

export const addItemBasket = (item: BasketItem) => {
    const existing: BasketItem[] = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    const index = existing.findIndex(p => p.id === item.id);
    existing[index].count += 1;
    localStorage.setItem(BASKET_KEY, JSON.stringify(existing));
}
