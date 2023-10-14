'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react';
import useSWR, { mutate } from 'swr'
export default function page({params}){
    const {id} = params
    const fetcher = (...args) => fetch(...args).then(res => (res.json()))
    const { data: movies, error :movieerror, isLoading: movieload, mutate } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=2435f0876fa2d7b2c5e2fb1de7340068`, fetcher)
    const { data: prices , error: priceerror, isLoading: priceload } = useSWR(`/api/post`, fetcher)

    const currentdata = prices?.movie.filter((e)=>{
        return e.id === id
       })

     function getcart(e){
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        console.log(e)
       const fruits = [{id:123}, {id:123}, {id:123}, {id:123}];
        const newdata = {id:e.id,title:e.title,price:e.price,img:e.img}
        users.push(newdata);
        console.log(users)
          localStorage.setItem("carousel", JSON.stringify(users));  
     }  
   console.log(currentdata)
    return(
        <>
         <div className={styles.container}>
            <div className={styles.imgcontainer}>
            <Image className={styles.img} src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`} fill />
            </div>
            <div className={styles.video}>

            </div>
            <div className={styles.details}>
             <p>ชื่อเรื่อง: {movies?.original_title}</p>
             <p>เรื่องย่อ: {movies?.overview}</p>
             
            </div>
            <div className={styles.cart}>
            {currentdata?.map((e)=>{
                return (
                    <>
                <p>ราคา:{e.price}</p>
                <Button variant="outlined" onClick={()=>{getcart({id:e.id,title:e.title,price:e.price,img:`https://image.tmdb.org/t/p/w500${movies?.poster_path}`})}}>Add to cart</Button>
                  </>
            
                )
            })}
            
            </div>
         </div>
        </>
    )
}