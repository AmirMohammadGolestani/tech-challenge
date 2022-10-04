import type { FC } from 'react'
import type { Rating as IRating } from '../../../interfaces/product'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.css'

interface Props {
  rate: IRating;
}

const Rating: FC<Props> = ({ rate: { rate, count } }) => {
  return (
    <div className={styles.box}>
      <span className={styles.count}>
        {count ?? undefined}
      </span>
      {[...Array(5)].map((_, index) => {
          return (index + 1) < rate
            ? <FontAwesomeIcon key={index} icon={faSolidStar} color="#fa2a55" />
            : (
              Math.ceil(rate) >= (index + 1)
                ? <FontAwesomeIcon key={index} icon={faStarHalfStroke} color="#fa2a55" />
                : <FontAwesomeIcon key={index} icon={faRegularStar} color="#fa2a55" />
            )
      })}
    </div>
  )
}

export default Rating