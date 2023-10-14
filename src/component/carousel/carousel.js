'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from "react"
import useSWR, { mutate } from 'swr'
export default function Carousel() {
/*   const fetcher = (...args) => fetch(...args).then(res => (res.json()))
  const { data, error, isLoading, mutate } = useSWR(`/api/post`, fetcher) */
  const data = localStorage.getItem('carousel')
  const [Current, setCurrent] = useState(0)

  const num = data?.movie
  const count = num ? num : 0

   useEffect(()=>{
    const interval = setInterval(()=>{
      Current === 4 ?  setCurrent(0) : setCurrent(Current + 1)
    },5000)
    return () => clearInterval(interval)
  },[Current]) 
  const slide = {
    transform: `translateX(-${Current * 100}%)`
  }
  return (
    <div className={styles.carousel}>
      <div className={styles.items} style={slide}>
            <div  className={styles.item}>
            <Image className={styles.img} src={`/ironman.png`} fill /> 
          </div>
            <div  className={styles.item}>
            <Image className={styles.img} src={`/captan.png`} fill /> 
          </div>
            <div  className={styles.item}>
            <Image className={styles.img} src={`/superman.png`} fill /> 
          </div>
            <div  className={styles.item}>
            <Image className={styles.img} src={`/batman.png`} fill /> 
          </div>
            <div  className={styles.item}>
            <Image className={styles.img} src={`/dune.png`} fill /> 
          </div>
      </div>

    </div>
  )
}