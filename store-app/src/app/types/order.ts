import { OrderItem } from "./orderItem";

export interface Order {
    id: number;
    userId: number;
    orderDate: string;
    items: OrderItem[];
}