import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
      <>
        <h2>hello world</h2>
        <h3>im omid moghadasi</h3>
        <h4>im junior developer</h4>
        <p>this is my first app by next.js</p>
          <hr/>
          <ul>
              <li><Link href="/products"><a>Products</a></Link></li>
          </ul>
      </>

  )
}
