import cls from './CardList.module.scss'
import {Product} from "@/shared/types/product";
import Card from "@/components/Card/Card";

interface CardListProps {
    products: Product[],
}

const CardList = ({products}: CardListProps) => {
    return (
        <section className={cls.card_list}>
            {products.map((product: Product) => (
                <Card key={product.id} product={product} />
            ))}
        </section>
    );
};

export default CardList;