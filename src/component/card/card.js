'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
export default function Card({data}) {
    const router = useRouter()
    return (
        <>
            <div onClick={()=>{router.push(`/product/01`)}} className={styles.card}>
                <div className={styles.imgcontainer}>

                </div>
                <div className={styles.title}>              
                    name          
                </div>
                <div className={styles.price}>              
                    price          
                </div>
                <div className={styles.cate}>              
                    #tpye       
                </div>
            </div>
        </>
    )
}