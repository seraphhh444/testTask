"use client"

import cls from './Navbar.module.scss'
import {mobileNavbarModel, navbarModel} from "./model/navbar";
import Image from "next/image";
import Button from "@/components/Button/Button";
import {useCallback, useState} from "react";
import Basket from "@/components/Basket/Basket";
import Link from "next/link";
import useMobile from "@/shared/hooks/useMobile";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [isMobile, isClient] = useMobile();

    const onClose = useCallback((val: boolean)=>{
        setOpen(val);
    }, [])

    if(!isClient) {
        return null;
    }

    if(isMobile) {
        return (
            <nav className={cls.navbar}>
                {
                    mobileNavbarModel.map((item)=>{
                        return item.title === 'Избранное' ? (
                            <Link className={cls.navbar_item} href="/likes" key={item.title}>
                                <Image src={item.imageSrc} alt={item.title} />
                            </Link>
                        ) : (
                            <Button
                                className={cls.navbar_item}
                                clear
                                key={item.title}
                                onClick={item.title === 'Корзина' ? () => setOpen(true) : undefined}
                            >
                                <Image src={item.imageSrc} alt={item.title} />
                            </Button>
                        );
                    })
                }
                <Basket opened={open} onClose={onClose} />
            </nav>
        )
    }

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