"use client"

import React, {useCallback, useEffect, useState} from "react";
import Modal from "@/components/Modal/Modal";
import Close from "@/assets/Close.svg";
import cls from "./Basket.module.scss";
import Image from "next/image";
import BasketProductCard from "./BasketProductCard";
import BasketPromo from "./BasketPromo";
import BasketOrderSummary from "./BasketOrderSummary";
import Button from "@/components/Button/Button";
import {BasketItem, countBasket, getBasket} from "@/services/basket/basketService";
import useMobile from "@/shared/hooks/useMobile";

interface BasketProps {
    opened: boolean;
    onClose: (val: boolean)=>void;
}

const Basket = ({opened, onClose}: BasketProps) => {

    const [count, setCount] = useState(0);
    const [basket, setBasket] = useState<BasketItem[]>([]);
    const [isMobile, isClient] = useMobile();

    const summarize = useCallback((basket: BasketItem[]) => {
        return basket.reduce((acc, item) => acc + Number(item.costBYN) * item.count, 0);
    }, [])

    const [sum, setSum] = useState<number>(summarize(basket));

    useEffect(() => {
        if (opened) {
            setBasket(getBasket());
        }
    }, [opened, count]);

    useEffect(() => {
        setCount(countBasket());
        setSum(Number(summarize(basket).toFixed(2)));
    }, [basket, summarize]);

    if(!isClient){
        return null;
    }

    if(isMobile){
        return (
            <Modal opened={opened} onCancel={onClose} >
                <div className={cls.modal_content}>
                    <div className={cls.cancel_wrapper}>
                        <Button onClick={()=>onClose(false)} clear>
                            <Image src={Close} alt="close" />
                        </Button>
                    </div>
                    <div className={cls.title_container}>
                        <div className={cls.title_wrapper}>
                            <h1>Корзина</h1>
                            <h3 className={cls.count}>/ {count} шт.</h3>
                        </div>
                    </div>

                    <div className={cls.basket_main_section}>
                        {basket.map((basketItem: BasketItem) => (
                            <BasketProductCard
                                key={basketItem.id}
                                item={basketItem}
                                isMobile={isMobile}
                                setCount={setCount}
                            />
                        ))}
                        <div className={cls.second_section}>
                            <BasketPromo />
                            <BasketOrderSummary sum={sum} />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <Modal opened={opened} onCancel={onClose} >
            <div className={cls.modal_content}>
                <div className={cls.title_container}>
                    <div className={cls.title_wrapper}>
                        <h1>Корзина</h1>
                        <h3 className={cls.count}>/ {count} шт.</h3>
                    </div>
                    <Button onClick={()=>onClose(false)} clear>
                        <Image className={cls.close_button} src={Close} alt="close" />
                    </Button>
                </div>

                <div className={cls.basket_main_section}>
                    {basket.map((basketItem: BasketItem) => (
                        <BasketProductCard
                            key={basketItem.id}
                            item={basketItem}
                            setCount={setCount}
                        />
                    ))}
                    <div className={cls.second_section}>
                        <BasketPromo />
                        <BasketOrderSummary sum={sum} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Basket;
