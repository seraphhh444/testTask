"use client"

import cls from './Card.module.scss'
import Button from "@/components/Button/Button";
import {useState} from "react";
import Minus from "@/assets/Minus.svg";
import Plus from "@/assets/Plus.svg";
import Like from "@/assets/Like.svg";
import Liked from "@/assets/Liked.svg";
import Basket from "@/assets/mobile/Basket.svg"
import Image from "next/image";
import {Product} from "@/shared/types/product";
import classNames from "classnames";
import {likePatch} from "@/services/likes/likesService";
import {addToBasket} from "@/services/basket/basketService";
import useMobile from "@/shared/hooks/useMobile";

interface CardProps {
    product: Product;
}

const Card = ({product}: CardProps) => {

    const [count, setCount] = useState<number>(0);
    const [liked, setLiked] = useState<boolean | undefined>(product.liked);
    const [isMobile, isClient] = useMobile();

    if(!isClient){
        return null;
    }

    const onLike = async (product: Product, val: boolean) => {
        await likePatch(product, val);
        setLiked(val);
    }

    const onAdd = (product: Product, count: number) => {
        if (count > 0) {
            addToBasket(product, count);
        }
    }

    const infoBlock =
        (label: string, labelVal: string) => (
        <div className={cls.product_info_block}>
            <span className={cls.label}>
                {label}
            </span>
            <span className={cls.dots}></span>
            <span className={cls.label_value}>
                {labelVal}
            </span>
        </div>
    )

    if(isMobile){
        return (
            <article className={cls.card}>
                <Button
                    className={
                        classNames(cls.card_like)}
                    onClick={() => onLike(product, !liked)}
                >
                    <Image src={liked? Liked : Like} alt="Like" />
                </Button>
                <div className={cls.card_avatar} />
                <div className={cls.card_info_container}>
                    <div className={cls.article}>
                        <span>Артикул : {product.articleNumber}</span>
                    </div>
                    <div className={cls.title_container}>
                        {product.title}
                    </div>
                    <div className={cls.cost_container}>
                    <span className={cls.byn_cost}>
                        {product.costBYN} BYN
                    </span>
                        <span className={cls.usd_cost}>
                        ~ {product.costUSD}$
                    </span>
                    </div>
                </div>
                <div className={cls.card_buttons_container}>
                    <div className={cls.counter}>
                        <Button
                            onClick={()=>setCount(prev=>prev > 0 ? prev-1 : prev)}
                            className={cls.card_button}
                            clear
                        >
                            <Image src={Minus} alt={'Minus'} />
                        </Button>
                        <span className={cls.count}>
                        {count}
                    </span>
                        <Button
                            onClick={()=>setCount(prev=>prev+1)}
                            className={cls.card_button}
                            clear
                        >
                            <Image src={Plus} alt={'Plus'} />
                        </Button>
                    </div>
                    <Button
                        onClick={()=>onAdd(product, count)}
                        className={cls.bin_button}>
                        <Image src={Basket} alt={'Bin'} />
                    </Button>
                </div>
            </article>
        )
    }

    return (
        <article className={cls.card}>
            <Button
                className={
                classNames(cls.card_like)}
                onClick={() => onLike(product, !liked)}
            >
                <Image src={liked? Liked : Like} alt="Like" />
            </Button>
            <div className={cls.card_avatar} />
            <div className={cls.card_info_container}>
                <div className={cls.title_container}>
                    {product.title}
                </div>
                <div className={cls.cost_container}>
                    <span className={cls.byn_cost}>
                        {product.costBYN} BYN
                    </span>
                    <span className={cls.usd_cost}>
                        ~ {product.costUSD}$
                    </span>
                </div>
                <div className={cls.product_info_wrapper}>
                    {infoBlock('VIN', product.vin)}
                    {infoBlock('Год', String(product.year))}
                    {infoBlock('VIN', product.vin)}
                </div>
            </div>
            <div className={cls.card_buttons_container}>
                <div className={cls.counter}>
                    <Button
                        onClick={()=>setCount(prev=>prev > 0 ? prev-1 : prev)}
                        className={cls.card_button}
                        clear
                    >
                        <Image src={Minus} alt={'Minus'} />
                    </Button>
                    <span className={cls.count}>
                        {count}
                    </span>
                    <Button
                        onClick={()=>setCount(prev=>prev+1)}
                        className={cls.card_button}
                        clear
                    >
                        <Image src={Plus} alt={'Plus'} />
                    </Button>
                </div>
                <Button
                    onClick={()=>onAdd(product, count)}
                    className={cls.bin_button}>
                    В корзину
                </Button>
            </div>
        </article>
    );
};

export default Card;