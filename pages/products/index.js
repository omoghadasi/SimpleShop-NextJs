import Link from "next/link";
import fetch from 'node-fetch'

function Products({products}) {
    console.log(products)
    return (
        <>
            <h2>this is products page</h2>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
            </ul>

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