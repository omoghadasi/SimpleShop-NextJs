import Link from "next/link";
import fetch from 'node-fetch'
import NavbarCustom from "../../components/navbar";
import {Container,Row,Col} from "reactstrap";
import ProductCard from "../../components/ProductCard";

function Products({products,categories}) {
    return (
        <>
            <NavbarCustom categories={categories}/>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h4>Products</h4>
                        <Col className='d-flex flex-wrap'>
                            {
                                products.map(item=>{
                                    return(
                                        <Col md='3' key={item.id} className='p-3'>
                                            <ProductCard item={item}/>
                                        </Col>
                                    )
                                })
                            }
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export async function getServerSideProps() {
    let resCategories = await fetch('https://fakestoreapi.com/products/categories')
    let categories =await resCategories.json()
    let res = await fetch('https://fakestoreapi.com/products')
    let products =await res.json()
    return {
        props: {products,categories}
    }
}

export default Products