import { useEffect, useReducer, createContext, useContext } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {

    function productReducer(prevState, action) {
        switch (action.type) {
            case 'ADD': {
                return [...prevState, action.productId]
            }
            case 'REMOVE': {
                return prevState.filter((pid) => pid !== action.productId)
            }
            case 'SUBTRACT': {
                const newArr = [...prevState]
                const index = newArr.indexOf(action.productId)
                newArr.splice(index, 1)
                return newArr
            }
            default:
                return prevState;
        }
    }

    function usePersistedReducer(reducer, initialState, key) {
        const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
            const persisted = localStorage.getItem(key)

            return persisted ? JSON.parse(persisted) : initial;
        })

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(state))
        }, [state, key])

        return [state, dispatch]
    }

    const useCartProducts = (key = 'items') => {
      return  usePersistedReducer(productReducer, [], key)
    }

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


