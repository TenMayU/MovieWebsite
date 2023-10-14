'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Image from 'next/image'
export default function Card({id,title,price,cate,img}) {
    const router = useRouter()
    return (
        <>
            <div onClick={()=>{router.push(`/product/${id}`)}} className={styles.card}>
                <div className={styles.imgcontainer}>
                <Image className={styles.img} src={img} fill/> 
                </div>
                <div className={styles.title}>              
                    {title}         
                </div>
                <div className={styles.price}>              
                    {price }         
                </div>
                <div className={styles.cate}>              
                    #{cate}      
                </div>
            </div>
        </>
    )
}