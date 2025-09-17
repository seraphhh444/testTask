import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Choose from "@/assets/Choose.svg";
import cls from "./BasketPromo.module.scss";

const BasketPromo = () => {
    return (
        <div className={cls.basket_input_container}>
            <input className={cls.basket_input} placeholder="Введите промокод" />
            <Button clear className={cls.choice_button}>
                <Image src={Choose} alt="choose" />
            </Button>
        </div>
    );
};

export default BasketPromo;
