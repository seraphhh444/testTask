"use client"

import cls from './Select.module.scss';
import {memo, useState} from "react";
import Image from 'next/image';
import MoreIcon from '@/assets/moreSvg.svg';
import classNames from "classnames";

type SizeType = 'medium';


interface SelectProps {
    options: string[],
    value: string,
    size?: SizeType,
}

const Select = (
    { options, value, size } : SelectProps
) => {

    const [selected, setSelected] = useState<string>(value);
    const [isActive, setIsActive] = useState<boolean>(false);

    const onSelect = (text: string) => {
        setSelected(text)
        setIsActive(false);
    }

    const mods = {
        [cls.medium]: size === 'medium',
    };

    const renderSelect = (isShow: boolean) => {
        if(isShow){
            return (
                   <ul
                       className={classNames(cls.options_container, mods)}
                   >
                       {options.map((text) =>
                           (
                               <li
                                   key={text}
                                   className={classNames(cls.option, mods)}
                                   onClick={() => {
                                       onSelect(text)
                                   }}
                               >
                                   {text}
                               </li>
                           ))}
                   </ul>
            )
        } else {
            return (
                <li
                    onClick={()=>setIsActive(true)}
                    className={classNames(cls.select, mods)}
                >
                    {selected}
                    <Image className={cls.svg} src={MoreIcon} alt={'more'} />
                </li>
            )
        }
    }

    return (
        <ul className={cls.select}>
            {
                renderSelect(isActive)
            }
        </ul>
    );
};

export default memo(Select);