"use client"

import cls from './Navbar.module.scss'
import {navbarModel} from "./model/navbar";
import Image from "next/image";
import Button from "@/components/Button/Button";
import {useCallback, useState} from "react";
import Basket from "@/components/Basket/Basket";
import Link from "next/link";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const onClose = useCallback((val: boolean)=>{
        setOpen(val);
    }, [])

    return (
        <nav className={cls.navbar}>
            {
                navbarModel.map((item)=>{
                    return item.title === 'Избранное' ? (
                        <Link className={cls.navbar_item} href="/likes" key={item.title}>
                            <Image src={item.imageSrc} alt={item.title} />
                            {item.title}
                        </Link>
                    ) : (
                        <Button
                            className={cls.navbar_item}
                            clear
                            key={item.title}
                            onClick={item.title === 'Корзина' ? () => setOpen(true) : undefined}
                        >
                            <Image src={item.imageSrc} alt={item.title} />
                            <span>{item.title}</span>
                        </Button>
                    );
                })
            }
            <Basket opened={open} onClose={onClose} />
        </nav>
    );
};

export default Navbar;