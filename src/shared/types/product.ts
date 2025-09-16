export interface Product {
    id: string;
    title: string;
    costBYN: string;
    costUSD: string;
    vin: string;
    year: number;
    articleNumber: number;
    liked?: boolean;
}