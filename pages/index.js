import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/home.module.scss'
const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
      fetch('/api/avo').then((response) => {
        return response.json()
      }).then((response) => {
        console.log(response.data)
        setProductList(response.data)
      })
    }, [])

  return (
    <div className={styles.container}>
      <h1>Avocado Store</h1>
      <div className={styles.containerCard}>
        {productList.map((product) => {
            return (
                <Link className={styles.card} key={product.id} href={`product/${product.id}`}>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} />
                        <p>Price: ${product.price}</p>
                </Link>
            )
        })
        }
      </div>
    </div>
  )
}

export default Home