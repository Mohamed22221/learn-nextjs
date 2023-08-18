import { useRouter } from 'next/router'
import React from 'react'

const slugDetails = () => {
    //go bage /blog/2022/10/5/id1
    const router = useRouter()
    console.log(router.query)
  return (
    <div>Slug Details</div>
  )
}

export default slugDetails