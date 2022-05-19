import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";

export default function HeroFullViewport() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1650623206556-fc1a59dd6c96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjczOTIzMw&ixlib=rb-1.2.1&q=80&w=1920"
  );
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("https://random.imagecdn.app/v1/image?format=json")
      .then((res) => res.json())
      .then((data) => setImage(data.url));

    imageChange();
  }, [change]);

  const imageChange = () => {
      setInterval(()=>{
        setChange(!change);
      }, 10000)
  };

  return (
    <div className={styles.HeroFullViewport}>
      <Image src={image} layout="fill" />
    </div>
  );
}
