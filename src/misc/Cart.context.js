import { createContext, useContext, useState } from 'react'
// import { useCartProducts } from './Custom-hook';
// import { useProducts } from './Product.context';

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);

    // const products = useProducts()
    // const persisted = localStorage.getItem('items')
    // const cartProducts = JSON.parse(persisted)

    // const update = ()=>{

    //     const subTotals = products.filter((item) =>
    //     cartProducts.includes(item.id)).map(({ id, price }) => {
    //       const count = cartProducts.filter(x => x === id).length;
    //       const subTotal = count * price;
    //       return subTotal;
    //     })
    
    //   const TOTAL_AMOUNT = subTotals.reduce((total, num) => total + num, 0);
    //   const COUNT = cartProducts.length;

    //     setCartData([TOTAL_AMOUNT, COUNT])
    // }

    return (
        <CartContext.Provider value={[cartData, setCartData]}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)


