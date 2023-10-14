'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
export default function Modal({close}){
    
    const [count,setCount] = useState(60)
    useEffect(()=>{
        const interval = setInterval(()=>{
          count === 0 ?  close(false) : setCount(count - 1)
        },1000)
        return () => clearInterval(interval)
      },[count]) 

    return(

           <div className={styles.container} >
               <div className={styles.body}>
                     <p>โปรดโอนเงินไปที่บัญชี</p>
                     <p>ธนาคาร กรุงไทย</p>
                     <p>เลขบัญชี: 100-0-1000-1</p>
                     <p>เวลาดำเนินการ {count}</p>
               </div>
              <button className={styles.btndel}  onClick={()=>{close(false)}}>ปิด</button>
           </div>

    )
}