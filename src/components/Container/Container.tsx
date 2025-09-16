import {ReactNode} from "react";
import Header from "@/components/Header/Header";
import cls from './Container.module.scss'

interface ContainerProps {
    children: ReactNode;
}

const Container = (
    { children } : ContainerProps
) => {
    return (
        <>
            <Header />
            <main className={cls.main}>
                {children}
            </main>
        </>
    );
};

export default Container;