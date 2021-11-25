import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button} from "reactstrap";
import NavbarCustom from "../components/navbar";

export default function Home() {
    return (
        <>
            <NavbarCustom/>
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
