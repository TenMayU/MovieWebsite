'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import { Button } from '@mui/material';
import Image from 'next/image';
export default function Cartcard({id,title,price,img}) {
   const  router = useRouter()

    function deletes(id){
        let data = JSON.parse(localStorage.getItem('users'));
        let current = data.filter((e)=>{
              return e.id != id
        })
        localStorage.setItem("users", JSON.stringify(current));  
        router.refresh()
    }
    return (
        <>
            <div  className={styles.card}>
                <div className={styles.imgcontainer}>
                        <Image className={styles.img} src={img} fill/>
                </div>
                <div className={styles.title}>              
                    ชื่อหนัง {title}    
                </div>
                <div className={styles.price}>              
                   ราคา {price}         
                </div>

                <div className={styles.delete}>              
                <Button variant="outlined" onClick={()=>{deletes(id)}} color="success">ลบ</Button>    
                </div>
            </div>
        </>
    )
}