import Image from "next/image";
import styles from "./page.module.css";
import Cases from "./cases/page";
import Banner from "@/components/banner/Banner";
import Carousel from "@/components/carousel/Carousel";
import Video from "@/components/video/Video";

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <Cases />
      <Video />
    </main>
  );
}
