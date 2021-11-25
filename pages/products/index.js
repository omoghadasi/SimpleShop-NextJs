import Link from "next/link";
import fetch from 'node-fetch'
import NavbarCustom from "../../components/navbar";
import {Container,Row,Col} from "reactstrap";

function Products({products}) {
    console.log(products)
    return (
        <>
            <NavbarCustom/>
            <Container>
                <Row>
                    <Col xs="3">
                        <h4>this is sidebar</h4>
                    </Col>
                    <Col xs="9">
                        <h2>this is products page</h2>
                        <ul>
                            {
                                products.map(item=>{
                                    return(
                                        <li key={item.id}>
                                            <div><span>{item.title}</span></div>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </Col>
                </Row>
            </Container>

        </>

    )
}

export async function getServerSideProps() {
    let res = await fetch('https://fakestoreapi.com/products')
    let products =await res.json()
    return {
        props: {products}
    }
}

export default Products