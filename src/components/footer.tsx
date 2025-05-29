import React from 'react'
import Filters from './filters'
import FooterMain from './footer-main'

const Footer = () => {
  return (
    <div className='grid grid-cols-10  bg-[##eeede5] '>
        <Filters/>
        <FooterMain/>
    </div>
  )
}

export default Footer