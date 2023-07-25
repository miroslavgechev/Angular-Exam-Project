import { Address } from "./userAddress";

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  address: Address;
  tel: string;
  creditInEur: number;
}
