import React, {Dispatch, SetStateAction} from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Minus from "@/assets/Minus.svg";
import Plus from "@/assets/Plus.svg";
import Cancel from "@/assets/Cancel.svg";
import cls from "./Basket.module.scss";
import {absoluteDeleteItemBasket, addItemBasket, BasketItem, deleteItemBasket} from "@/services/basket/basketService";

interface BasketProductCardProps {
    item: BasketItem;
    setCount: Dispatch<SetStateAction<number>>;
}

const BasketProductCard = ({item, setCount}: BasketProductCardProps) => {

    const onDelete = () => {
        setCount(prev=>prev - 1);
        deleteItemBasket(item);
    }

    const onAdd = () => {
        setCount(prev=>prev + 1);
        addItemBasket(item);
    }

    const onCancel = ()=>{
        setCount(prev=>prev - item.count);
        absoluteDeleteItemBasket(item);
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
