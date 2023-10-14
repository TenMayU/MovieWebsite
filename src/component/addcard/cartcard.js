'use client'
import Image from 'next/image';
/* import { useRouter } from 'next/navigation' */
import styles from './page.module.css'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import useSWR, { mutate } from 'swr'
export default function Addcard({ id,title, img, overview }) {
    /*     const router = useRouter() */

    function add(event) {
        event.preventDefault()
        const bodys = {id:event.target[3].value ,title: title, price: event.target[0].value, cate: event.target[1].value, img: event.target[2].value }
        fetch("/api/post", {
          method: "POST",
          body: JSON.stringify(
            bodys
          )
        }
        )
    
        /* window.localStorage.setItem(event.target[0].value,JSON.stringify(false)) */
        /*  console.log(event) */
      }
    return (
        <>
            <form className={styles.card} onSubmit={add} >
                <div className={styles.imgcontainer}>
                 <Image className={styles.img} src={`https://image.tmdb.org/t/p/w500${img}`} fill/> 
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.price}>
                    {overview}
                </div>
                <div className={styles.manageprice}>
                    <input className={styles.addprice} placeholder='เพิ่มราคา' />

                </div>
                <div className={styles.manageprice}>
                    <input className={styles.addprice} placeholder='เพิ่มประเภท' />
                    <input hidden value={`https://image.tmdb.org/t/p/w500${img}`}/>
                    <input hidden value={id}/>
                </div>
                <div className={styles.delete}>
                    <Button variant="outlined" color="success" type='submit'>เพิ่มหนัง</Button>
                    <Button variant="outlined" color="success">ลบ</Button>
                </div>
            </form>
        </>
    )
}