"use client"

import React, {memo, useEffect, useState} from 'react';
import cls from './Header.module.scss';
import Select from "@/components/Select/Select";
import Telegram from "@/assets/Telegram.svg"
import Viber from "@/assets/Viber.svg"
import {addresses, forClients} from "./model/model";
import Image from 'next/image';
import Logo from "@/components/Logo/Logo";
import Menu from "@/assets/Menu.svg"
import MobMenu from "@/assets/mobile/mobMenu.svg"
import Search from "@/components/Search/Search";
import Navbar from "@/components/Navbar/Navbar";
import CustomLink from "@/components/CustomLink/CustomLink";
import useMobile from "@/shared/hooks/useMobile";

const Header = () => {

    const [isMobile, isClient] = useMobile();

    if(!isClient){
        return null;
    }

    if (isMobile) {
        return (
            <header className={cls.header}>
                <section className={cls.mobile_upper_section}>
                    <div className={cls.info_section}>
                        <CustomLink
                            href={'/catalog'}
                            className={cls.catalog}
                        >
                            <Image src={MobMenu} alt={'Menu'} />
                        </CustomLink>
                        <div className={cls.mobile_icons_wrapper}>
                            <Logo />
                            <Navbar />
                        </div>
                    </div>
                </section>
                <section className={cls.main_header_section}>
                    <Search />
                </section>
            </header>
        )
    }

    return (
        <header className={cls.header}>
            <section className={cls.info_section}>
                <Select
                    options={addresses}
                    value={addresses[0]}
                />
                <div className={cls.contacts_wrapper}>
                    <span>
                        +375297886644
                    </span>
                    <div className={cls.icons_wrapper}>
                        <Image src={Telegram} alt={'Telegram'} />
                        <Image src={Viber} alt={'Viber'} />
                    </div>
                </div>
                <div className={cls.for_clients} >
                    <Select
                        options={forClients}
                        value={'Клиентам'}
                        size={'medium'}
                    />
                    <CustomLink href={'/contacts'}>
                        <span>
                        Контакты
                        </span>
                    </CustomLink>
                </div>
            </section>
            <section className={cls.main_header_section}>
                <Logo />
                <CustomLink
                    href={'/catalog'}
                    className={cls.catalog}
                >
                    <Image src={Menu} alt={'Menu'} />
                    <span>
                        Каталог
                    </span>
                </CustomLink>
                <Search />
                <Navbar />
            </section>
        </header>
    );
};

export default memo(Header);