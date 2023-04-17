// mahawarkhushi3
import React from 'react'
import { PopupWidget } from 'react-calendly'

const PopupComponent = () => {
  return (
    <div className='popup-widget'>
      <PopupWidget
        url='https://calendly.com/mahawarkhushi3'
        rootElement={document.getElementById('root')}
        text='Schedule Time with me'
        textColor='#ffffff'
        color='#319795'
        height='700px'
        width='300px'
      />
    </div>
  )
}

export default PopupComponent
