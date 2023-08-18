import { useRouter } from 'next/router'
import React from 'react'

const adsIdClintPage = () => {
  // go page /clients/id/adsId
  const router = useRouter()
  console.log(router)
  return (
    <div>Ads Id Clint Page</div>
  )
}

export default adsIdClintPage