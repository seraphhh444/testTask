import React from "react";
import Button from "@/components/Button/Button";
import cls from "./Basket.module.scss";

interface BasketOrderSummaryProps {
    sum: number;
}

const BasketOrderSummary = ({sum}: BasketOrderSummaryProps) => {
    return (
        <div className={cls.basket_order_container}>
            <div className={cls.order_cost_wrapper}>
                <div className={cls.upper_cost_section}>
                    <h3>Сумма заказа</h3>
                    <div className={cls.lower}>
                        <span className={cls.title}>Стоимость запчастей</span>
                        <span className={cls.dots}></span>
                        <span className={cls.cost}>{sum} BYN</span>
                    </div>
                </div>
                <div className={cls.total}>
                    <span className={cls.title}>Итого</span>
                    <span className={cls.cost}>{sum} BYN</span>
                </div>
            </div>
            <Button className={cls.order_button}>Оформить заказ</Button>
        </div>
    );
};

export default BasketOrderSummary;
