import { OrderItem } from "./orderItem";

export interface Order {
    userId: number | string;
    orderDate: string;
    items: OrderItem[];
}