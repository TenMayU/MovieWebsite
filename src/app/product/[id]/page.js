import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'

export default function page({params}){
   const {id} = params
    return(
        <>
         <div className={styles.container}>
            <div className={styles.imgcontainer}>
            <Image className={styles.img} src={'/sigwen.png'} fill />
            </div>
            <div className={styles.video}>

            </div>
            <div className={styles.details}>
               
            </div>
            <div className={styles.cart}>
            <p>price</p>
            <Button variant="outlined">Add to cart</Button>
            </div>
         </div>
        </>
    )
}