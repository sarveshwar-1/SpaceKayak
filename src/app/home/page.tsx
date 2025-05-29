import Navbar from '@/components/navbar'
import React from 'react'
import Main from '@/components/main'
import Footer from '@/components/footer'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="">
        <Navbar />
        <Main/>
        <Footer/>
    </div>
  )
}

export default Page