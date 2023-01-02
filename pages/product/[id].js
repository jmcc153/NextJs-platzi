import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'

const ProductItem = () => {
    const router = useRouter()
    const [product, setProduct] = useState([])
    useEffect(() => {
      fetch(`/api/avo/${router.query.id}`).then((response) => {
        return response.json()
      }).then((response) => {
        setProduct(response)
      })
    }, [])

  return (
    <div>
        <h1>{product.name}</h1>
    </div>
  )
}

export default ProductItem