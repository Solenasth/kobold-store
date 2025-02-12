import type { Product } from "@/components/types";
import { defineStore } from "pinia";

interface IStoreState { 
    products : Product[], 
}

export const useCartStore = defineStore('cart', {
    state: () : IStoreState=> ({
        products : []
    }), 

    getters: {
        productCount(state) {
            return state.products.length
        },
        productCountById(state){
            return(id:number) => (
                state.products.filter(product => 
                    product.id === id
                ).length
            )
        }, 
        getAllUniqueProducts(state){
            const uniqueProducts: Set<Product> = new Set()
            state.products.forEach((product: Product) => uniqueProducts.add(product))

            return Array.from(uniqueProducts)
        },

        getAllProducts(state){
            return state.products
        },
    },
    actions: { 
        addToCart(product:Product){
            this.products.push(product)
        },
        removeFromCart(product:Product){
            console.log("INVOCADO EL REMOVE")
            this.products.splice(this.products.findIndex((p) => p.id == product.id),1)
        }
    }

})