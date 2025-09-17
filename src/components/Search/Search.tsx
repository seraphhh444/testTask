import cls from './Search.module.scss'
import Image from 'next/image';
import SearchIcon from '@/assets/Search.svg'
import Button from "@/components/Button/Button";

const Search = () => {


    return (
        <div className={cls.search_container}>
            <input className={cls.input} placeholder="Введите код или название товара" />
            <Button className={cls.search_button} clear>
                <Image src={SearchIcon} alt="Search" />
            </Button>
        </div>
    );
};

export default Search;