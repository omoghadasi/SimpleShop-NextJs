import Link from "next/link";

function SingleProduct() {
    return (
        <>
            <h2>this is single products page</h2>
            <ul>
                <li><Link href="/products"><a>Products</a></Link></li>
            </ul>
        </>

    )
}

export default SingleProduct;