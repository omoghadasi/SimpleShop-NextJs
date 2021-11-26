import Link from "next/link";
import {Container, Row, Col, Button} from "reactstrap";
import NavbarCustom from "../components/navbar";

function Home({categories}) {
    return (
        <>
            <NavbarCustom categories={categories}/>
            <Container>
                <Row>
                    <Col className='text-center p-5'>
                        <h2>Hello World! 👋</h2>
                        <br/>
                        <h3>im omid moghadasi</h3>
                        <h4>this is my first app by next.js</h4>
                    </Col>
                </Row>

                <Row>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Button color="primary" outline>
                            <Link href="/products"><a className='links'>Products</a></Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export async function getServerSideProps() {
    let resCategories = await fetch('https://fakestoreapi.com/products/categories')
    let categories =await resCategories.json()
    return {
        props: {categories}
    }
}

export default Home;
