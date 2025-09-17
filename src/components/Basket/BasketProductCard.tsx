"use client"

import React, {Dispatch, SetStateAction, useState} from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Minus from "@/assets/Minus.svg";
import Plus from "@/assets/Plus.svg";
import Like from "@/assets/Like.svg";
import Liked from "@/assets/Liked.svg";
import Cancel from "@/assets/Cancel.svg";
import Settings from "@/assets/mobile/Settings.svg"
import Line from "@/assets/mobile/Line.svg";
import cls from "./BasketProductCard.module.scss";
import {absoluteDeleteItemBasket, addItemBasket, BasketItem, deleteItemBasket} from "@/services/basket/basketService";
import Modal from "@/components/Modal/Modal";
import {likePatch} from "@/services/likes/likesService";

interface BasketProductCardProps {
    item: BasketItem;
    setCount: Dispatch<SetStateAction<number>>;
    isMobile?: boolean;
}

const BasketProductCard = ({item, setCount, isMobile}: BasketProductCardProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFav, setIsFav] = useState(item.liked);

    const onDelete = () => {
        setCount(prev=>prev - 1);
        deleteItemBasket(item);
    }

    const onAdd = () => {
        setCount(prev=>prev + 1);
        addItemBasket(item);
    }

    const onFav = async (val: boolean)=>{
        await likePatch(item, val);
        setIsFav(val);
    }

    const onCancel = ()=>{
        setCount(prev=>prev - item.count);
        absoluteDeleteItemBasket(item);
    }

    const onSettings = (val: boolean) => {
        setIsModalOpen(val);
    }

    if(isMobile){
        return (
            <div className={cls.basket_product_card}>
                <div className={cls.product_avatar} />
                <div className={cls.product_info_container}>
                    <div className={cls.product_upper_section}>
                        <div className={cls.product_upper_section_info}>
                        <span className={cls.product_title}>
                            {item.title}
                        </span>
                            <div className={cls.article_wrapper}>
                                <span>Артикул:</span>
                                <div>{item.articleNumber}</div>
                            </div>
                        </div>
                        <div onClick={()=>setIsModalOpen(true)} className={cls.product_settings}>
                            <Image src={Settings} alt={'settings'} />
                        </div>
                    </div>
                    <span className={cls.lower_container}>{item.costBYN} BYN</span>
                </div>
                <Modal opened={isModalOpen} onCancel={onSettings} settings>
                    <div className={cls.settings_container}>
                        <div className={cls.settings_upper}>
                            <div className={cls.line_wrapper}>
                                <Image src={Line} alt={'line'} />
                            </div>
                        </div>
                        <div className={cls.main_container}>
                            <div>
                                <p>Изменить</p>
                                <p>количество</p>
                            </div>
                            <div className={cls.buttons_wrapper}>
                                <Button
                                    className={cls.button}
                                    onClick={() => onDelete()}
                                >
                                    <Image src={Minus} alt="minus" />
                                </Button>
                                <span>{item.count}</span>
                                <Button
                                    className={cls.button}
                                    onClick={() => onAdd()}
                                >
                                    <Image src={Plus} alt="plus" />
                                </Button>
                            </div>
                        </div>
                        <div className={cls.lower_container}>
                            <span onClick={()=>onCancel()}>
                                Удалить
                            </span>
                            <div onClick={()=>onFav(!isFav)} className={cls.fav}>
                                <Image src={isFav ? Liked : Like} alt={'like'} />
                                <span>В избранное</span>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

    return (
        <div className={cls.basket_product_card}>
            <div className={cls.product_avatar} />
            <div className={cls.product_info_container}>
                <div className={cls.product_upper_section}>
                    <div className={cls.product_upper_section_info}>
                        <span className={cls.product_title}>
                            {item.title}
                        </span>
                        <div className={cls.article_wrapper}>
                            <span>Артикул:</span>
                            <div>{item.articleNumber}</div>
                        </div>
                    </div>

                    <div className={cls.product_buttons_container}>
                        <div className={cls.buttons_wrapper}>
                            <Button
                                className={cls.button}
                                onClick={() => onDelete()}
                            >
                                <Image src={Minus} alt="minus" />
                            </Button>
                            <span>{item.count}</span>
                            <Button
                                className={cls.button}
                                onClick={() => onAdd()}
                            >
                                <Image src={Plus} alt="plus" />
                            </Button>
                        </div>
                        <Button onClick={()=>onCancel()} className={cls.cancel_button}>
                            <Image src={Cancel} alt="cancel" />
                        </Button>
                    </div>
                </div>
                <span className={cls.lower_container}>{item.costBYN} BYN</span>
            </div>
        </div>
    );
};

export default BasketProductCard;
