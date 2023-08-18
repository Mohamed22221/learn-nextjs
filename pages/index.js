import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function homePage() {
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
    </>
  );
}
