import { OrderItem } from "./orderItem";

export interface UserCart {
    userId: string;
    cartItems: OrderItem[] 
}