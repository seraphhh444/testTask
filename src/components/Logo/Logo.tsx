import cls from './Logo.module.scss'
import CustomLink from "@/components/CustomLink/CustomLink";

const Logo = () => {
    return (
        <CustomLink href={'/'} className={cls.logo_wrapper}>
            <span className={cls.logo}>
                AUTOMERC
            </span>
        </CustomLink>
    );
};

export default Logo;