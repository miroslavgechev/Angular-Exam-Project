import { OrderItem } from "./orderItem";

export type UserCart = {
    userId: string;
    cartItems: OrderItem[] 
}