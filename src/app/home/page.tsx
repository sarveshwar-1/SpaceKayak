import Navbar from '@/components/navbar'
import React from 'react'
import Main from '@/components/main'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="">
        <Navbar />
        <Main/>
    </div>
  )
}

export default Page