'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from "react"

export default function Carousel() {
  const [Current, setCurrent] = useState(0)
   useEffect(()=>{
    const interval = setInterval(()=>{
      Current === 3 ?  setCurrent(0) : setCurrent(Current + 1)
    },5000)
    return () => clearInterval(interval)
  },[Current]) 
  const slide = {
    transform: `translateX(-${Current * 100}%)`
  }
  return (
    <div className={styles.carousel}>
      <div className={styles.items} style={slide}>
        <div className={styles.item}>
          <Image className={styles.img} src={'/sigwen.png'} fill /> 
        </div>
        <div className={styles.item}>
        <Image className={styles.img} src={'/ganyu.png'}  fill />
        </div>
        <div className={styles.item}>
        <Image className={styles.img} src={'/sigwen.png'}  fill />
        </div>
        <div className={styles.item}>
        <Image className={styles.img} src={'/sigwen.png'}  fill />
        </div>
      </div>

    </div>
  )
}