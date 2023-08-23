import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { redirect } from 'next/dist/server/api-utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home({todos}) {
  // const [todos , setTodos] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => setTodos(json))
  // }, [])

  return (
    <>
     {todos?.map((item) =>{
      return (
        <div>
          <h4>{item.title}</h4>
        </div>
      )
     })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return {
    props : {
      todos
    },
    revalidate: 20, // Regenerate the page every 20 seconds

  };

}