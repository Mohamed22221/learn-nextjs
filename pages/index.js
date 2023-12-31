import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function homePage() {
  const router = useRouter()
  const navigateBlogs = () =>{
    router.push("/blogs")
    // router.push({pathname : "/blogs"})
    // router.replace("/blogs")

  }
  return (
    <>
      <h1>start home</h1>
      <ul>
        <li>
          <Link href="clients">Clients</Link>
        </li>
        <li>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
      <button onClick={navigateBlogs}>Go Blogs Bage</button>
    </>
  );
}
