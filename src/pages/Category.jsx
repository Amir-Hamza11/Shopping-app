import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Checkbox, Col, FlexboxGrid, Panel } from 'rsuite'
import DisplayProducts from '../components/DisplayProducts'
import MainPageLayout from '../components/MainPageLayout'
import { useCart } from '../context/Cart.context'
import { useProducts } from '../context/Product.context'

function applyFilters(products, filters) {
    let result = [...products];

    if (filters.canDeliver) {
        result = result.filter(p => p.delivery === true);
    }

    if (filters.inStock) {
        result = result.filter(p => p.inStock === true);
    }
    return result;
}

const Category = () => {

    const products = useProducts()
    const { id } = useParams();
    const { deleteProduct1, onPlusClick1, cartProducts } = useCart()

    const categoryProducts = products.filter((item) => item.categoryId === id)

    const [filters, setFilters] = useState({
        canDeliver: false,
        inStock: false
    })

    const filteredProducts = applyFilters(categoryProducts, filters);

    const handleOnFilterChange = (filterName, newValue) => {
        setFilters((prevFilterState) => {
            return { ...prevFilterState, [filterName]: newValue }
        })
    }

    const onDeliveryChange = (value, checked) => {
        handleOnFilterChange('canDeliver', checked)
    }
    const onStockChange = (value, checked) => {
        handleOnFilterChange('inStock', checked)
    }

    const addProduct = (ProductId) => {
        const isProductExist = cartProducts.includes(ProductId)

        if (isProductExist) {
            deleteProduct1(ProductId)
        }
        else {
            onPlusClick1(ProductId)
        }
    }

    return (
        <MainPageLayout>
            <Col sm={4} md={4} lg={4}>
                <Panel bordered shaded className='mt-3'>
                        <h6>Filters:</h6>
                        <Checkbox onChange={onDeliveryChange} > Delivery</Checkbox>
                        <Checkbox onChange={onStockChange} >InStock</Checkbox>
                </Panel>
            </Col>
            <Col sm={20} md={20} lg={20}  >
                <Panel>
                    <FlexboxGrid justify="start">
                        {filteredProducts.map((item) => (
                            <DisplayProducts
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                currency={item.currency}
                                delivery={item.delivery}
                                thumbnail={item.thumbnail}
                                inStock={item.inStock}
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