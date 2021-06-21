export interface Contact {
    name: string;
    address: Address[];
}

export interface Address {
    street: string;
    city: string;
    pincode: number;
}