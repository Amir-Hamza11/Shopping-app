import { createContext, useContext } from "react";
import { useCartProducts } from "../misc/Custom-hook";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, dispatch] = useCartProducts()

    const deleteProduct1 = (pId) => {
        dispatch({ type: 'REMOVE', productId: pId })
      }
    
      const onMinusClick1 = (pId) => {
        dispatch({ type: 'SUBTRACT', productId: pId })
      }
      const onPlusClick1 = (pId) => {
        dispatch({ type: 'ADD', productId: pId })
      }

    return (
        <CartContext.Provider value={{deleteProduct1, onMinusClick1, onPlusClick1, cartProducts  }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)


