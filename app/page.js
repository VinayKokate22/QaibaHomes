import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div>
        <div className={styles.landingpage}>
          <Navbar />
          <Hero />
        </div>
        <Info />
      </div>
    </>
  );
}
