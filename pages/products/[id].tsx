import type { NextPage, GetServerSideProps } from 'next'

import ProductTemplate from '../../components/templates/Product'

import type { Product as IProduct } from '../../interfaces/product'

interface Props {
  product: IProduct
}

const Product: NextPage<Props> = ({ product }) => {

  return <ProductTemplate product={product} /> 
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {

  try {
    const productRawData = await fetch(`https://fakestoreapi.com/products/${params?.id}`)
    const product = await productRawData.json()

    return {
      props: {
        product
      }
    }
    
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default Product