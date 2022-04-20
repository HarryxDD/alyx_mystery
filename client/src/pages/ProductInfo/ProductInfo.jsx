import React from 'react'
import { Overview, Details } from '../../components'

import './ProductInfo.css'

const ProductInfo = () => {
  return (
    <div className='page__content'>
        <div className='page__main'>
          <div className='asset__view'>
            <div className='asset__info'>
              <Overview/>
              <Details/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductInfo