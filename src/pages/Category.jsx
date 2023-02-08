import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Checkbox, Col, Divider, FlexboxGrid, Panel } from 'rsuite'
import DisplayProducts from '../components/DisplayProducts'
import MainPageLayout from '../components/MainPageLayout'
import { useCartProducts } from '../misc/Custom-hook'
import { useProducts } from '../misc/Product.context'

const Category = () => {

    const products = useProducts()
    const [dispProducts, setDispProducts] = useState([]);
    const [canDeliver, setCanDeliver] = useState(false)
    const [inStick, setInStock] = useState(false)
    const [cartProducts, dispatch] = useCartProducts()
    const { id } = useParams();

    
    useEffect(() => {
        const results = products.filter((item) => item.categoryId === id)

        if (canDeliver) {
            const delProducts = results.filter(item => item.delivery)
            setDispProducts(delProducts)
            return
        }
         if(inStick){
            const stockProducts =  results.filter(item => item.inStock)
            setDispProducts(stockProducts)
            return
        }
        
            setDispProducts(results)
        
    }, [id, canDeliver, inStick, products])

    
    const onDeliveryChange = () => {
        setCanDeliver(p => !p)
    }
    const onStockChange = () => {
        setInStock(p => !p)
    }


    const addProduct = (ProductId) => {
        const isProductExist = cartProducts.includes(ProductId)

        if (isProductExist) {
            dispatch({ type: 'REMOVE', productId: ProductId })
        }
        else {
            dispatch({ type: 'ADD', productId: ProductId })
        }
    }

    return (
        <MainPageLayout>
            <Col sm={4} md={4} lg={4}   >
                <h5>Filter</h5>
                <div>
                    <Checkbox onChange={onDeliveryChange} > Delivery</Checkbox>
                </div>
                <div>
                    <Checkbox onChange={onStockChange} >InStock</Checkbox>
                </div>
                <Divider vertical />
            </Col>
            <Col sm={20} md={20} lg={20}  >
                <Panel>
                    <FlexboxGrid justify="start">
                        {dispProducts.map(({ id, name, price, currency, delivery, thumbnail, inStock }) => (
                            <DisplayProducts
                                key={id}
                                id={id}
                                name={name}
                                price={price}
                                currency={currency}
                                delivery={delivery}
                                thumbnail={thumbnail}
                                inStock={inStock}
                                addProduct={addProduct}
                                cartProducts={cartProducts}
                            />
                        ))}
                    </FlexboxGrid>
                </Panel>
            </Col>
        </MainPageLayout>
    )

}

export default Category