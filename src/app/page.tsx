import Container from "@/components/Container/Container";
import cls from "@/styles/page.module.scss";
import Card from "@/components/Card/Card";
import CardList from "@/components/CardList/CardList";
import axios from "axios";

export default async function Home() {

    const response = await axios.get("http://localhost:3000/products");
    const products = response.data;

  return (
    <Container>
        <aside className={cls.upper_block}>
            <span>
                Популярные товары
            </span>
        </aside>
            <CardList products={products} />
    </Container>
  );
}
