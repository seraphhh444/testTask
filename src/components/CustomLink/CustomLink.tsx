import Link from "next/link";
import {ReactNode} from "react";
import classNames from "classnames";
import cls from './CustomLink.module.scss';

interface LinkProps {
    href: string;
    children?: ReactNode;
    className?: string;
}

const CustomLink = ({href, children, className}: LinkProps) => {
    return (
        <Link href={href} className={classNames(cls.link, className)} >
            {children}
        </Link>
    );
};

export default CustomLink;