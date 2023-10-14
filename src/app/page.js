'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Carousel from '@/component/carousel/carousel';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Card from '@/component/card/card';
import useSWR, { mutate } from 'swr'

export default function Home() {
      const router = useRouter()
      const searchParams = useSearchParams()
      const search = searchParams.get('cate')
      const fetcher = (...args) => fetch(...args).then(res => (res.json()))
      const { data, error, isLoading, mutate } = useSWR(`/api/post`, fetcher)
      if (!search) {
            router.replace('/?cate=Action')
      }

      function selectcate(event){
            router.replace(`/?cate=${event}`,{ scroll: false })
      }
     const currentdata = data?.movie.filter((e)=>{
      return e.cate === search
     })
     console.log(currentdata)
     console.log(data)
      return (
            <>
                  <div className={styles.container}>
                        <section className={styles.banner}>
                              <Carousel />
                        </section>
                        <section className={styles.cate}>
                              <div className={styles.category}>
                                    <div onClick={() => { selectcate("Action") }} className={styles.type + " " + styles[search === "Action" ? "tabactive" : "" ]}>Action</div>
                                    <div onClick={() => { selectcate("Drama") }} className={styles.type+ " " + styles[search === "Drama" ? "tabactive" : "" ]}>Drama</div>
                                    <div onClick={() => { selectcate("Comedy") }} className={styles.type+ " " + styles[search === "Comedy" ? "tabactive" : "" ]}>Comedy</div>
                                    <div onClick={() => { selectcate("Horror") }} className={styles.type+ " " + styles[search === "Horror" ? "tabactive" : "" ]}>Horror</div>
                                    <div onClick={() => { selectcate("Romatic") }} className={styles.type+ " " + styles[search === "Romatic" ? "tabactive" : "" ]}>Romatic</div>
                              </div>
                              <div className={styles.listitems}>
                                   {currentdata?.map((e,index)=>{
                                    return <Card key={index} id={e.id} title={e.title} price={e.price} cate={e.cate} img={e.img}/>
                                   })}
                              </div>
                        </section>
                  </div>
            </>
      )
}
