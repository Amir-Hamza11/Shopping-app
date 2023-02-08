import  { createContext, useContext, useState } from "react"
import items from '../products.json'

const ProductContext = createContext()

export const ProductProvider = ({children})=>{

    const [products] = useState(items)

return (
    <ProductContext.Provider value={products} >
    {children}
    </ProductContext.Provider>
)
}

export const useProducts = ()=> useContext(ProductContext)