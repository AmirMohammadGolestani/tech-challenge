import type { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../../organisms/Layout'
import Rating from '../../molecules/Rating'

import type { Product as IProduct } from '../../../interfaces/product'

import { faShoppingCart, faShareNodes } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'

interface Props {
  product: IProduct
}

const Product: FC<Props> = ({ product }) => {

  return (
    <Layout
      title={product.title}
      description={product.description}
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={{
              background: `url(${product.image}) no-repeat center center`, 
              backgroundSize: "contain"
            }}
          >
          </div>
          <div className={styles.content}>
            <div>
              <div className={styles.header}>
                <h1 className={styles.title}>{product.title}</h1>
                <Rating rate={product.rating} />
              </div>
              <p className={styles.price}>${product.price}</p>
            </div>
            <div className={styles.description}>
              <h2>DESCRIPTION</h2>
              <p>{product.description}</p>
            </div>
            <div className={styles.action}>
              <button className={styles.add_to_card}>
                <FontAwesomeIcon icon={faShoppingCart} />
                ADD TO CART
              </button>
              <button
                className={styles.share_button}
              >
                <FontAwesomeIcon icon={faShareNodes} size="2x" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product