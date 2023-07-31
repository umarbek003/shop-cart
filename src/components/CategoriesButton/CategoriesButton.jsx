import React from 'react'
import './Button.scss'

const CategoriesButton = () => {
    const button =['Headphone Type', 'Price', 'Review', 'Color', 'Material', 'Offer', ]
  return (
    <div className='d-flex justify-between'>
        <div>
        {
        button.map(el => (
            <button style={{
                marginRight: '20px'
            }} className='categories-button' key={el}>{el}</button>
        ))
      }
        </div>
      <button className='categories-button'>sort by</button>
    </div>
  )
}

export default CategoriesButton
