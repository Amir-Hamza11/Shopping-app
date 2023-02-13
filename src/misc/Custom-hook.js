// import { useEffect, useReducer } from "react";

// function productReducer(prevState, action) {
//     switch (action.type) {
//         case 'ADD': {
//             return [...prevState, action.productId]
//         }
//         case 'REMOVE': {
//             return prevState.filter((pid) => pid !== action.productId)
//         }
//         case 'SUBTRACT': {
//             const newArr = [...prevState]
//             const index = newArr.indexOf(action.productId)
//             newArr.splice(index, 1)
//             return newArr
//         }
//         default:
//             return prevState;
//     }
// }

// function usePersistedReducer(reducer, initialState, key) {
//     const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
//         const persisted = localStorage.getItem(key)

//         return persisted ? JSON.parse(persisted) : initial;
//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(state))
//     }, [state, key])

//     return [state, dispatch]
// }

// export function useCartProducts(key = 'items') {
//     return usePersistedReducer(productReducer, [], key)
// }