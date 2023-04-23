
export interface product {
    id: number,
    productName: string,
    price: number
}

export interface order {
    userId: number,
    productId: number,
    quantity: number
}

export interface myOrders {
    id: number,
    name: string,
    productName: string,
    quantity: number,
    price: number
}

