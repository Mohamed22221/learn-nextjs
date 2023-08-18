import { useRouter } from 'next/router'
import React from 'react'

const projectsDetails= () => {
    const router = useRouter()
    console.log(router)
    
  return (
    <div>
       <h1>Start Portfolio Details</h1> 
    </div>
  )
}

export default  projectsDetails