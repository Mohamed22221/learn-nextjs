import { useRouter } from 'next/router'
import React from 'react'

const detailsClientPage = () => {
    // go page /clients/id
    const router = useRouter()
    console.log(router)
  return (
    <div>Details Client Page</div>
  )
}

export default detailsClientPage