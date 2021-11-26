import Link from "next/link";
import {Container, Col, Row, Button} from "reactstrap";
import NavbarCustom from "../../components/navbar";
import fetch from "node-fetch";
function SingleProduct({product,categories}) {
    return (
        <>
            <NavbarCustom categories={categories}/>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex mt-5 p-5 align-items-center border-2 border-dark border'>
                            <img src={product.image}
                                  alt={product.title} className='single-product-img w-50'/>
                            <div className='ms-5'>
                                <h3>{product.title}</h3>
                                <h5 className='text-secondary'>{product.category}</h5>
                                <div>
                                    <span>Price: {product.price}</span>
                                    <span className='ms-5'>Rating: {product.rating.rate} as {product.rating.count}</span>
                                </div>
                                <p className='mt-3 text-'>{product.description}</p>
                                <Button>
                                    <Link href='/products'><a>Add To Cart</a></Link>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export async function getServerSideProps({params}) {
    let resCategories = await fetch('https://fakestoreapi.com/products/categories')
    let categories =await resCategories.json()
    let res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    let product =await res.json()
    return {
        props: {product,categories}
    }
}

export default SingleProduct;