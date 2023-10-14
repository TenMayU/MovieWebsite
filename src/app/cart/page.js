'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Cartcard from '@/component/cartcard/cartcard';
import useSWR, { mutate } from 'swr'
import Modal from '@/component/modal/modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function page({ params }) {
    const router = useRouter()
    const { id } = params
    const [Modals, setModals] = useState(false)
    let data = JSON.parse(localStorage.getItem('users'));
    let sum
    let currentsum
    let discount
    let discountpercent

    function sumprice(){
    
            sum = data.map((e)=>{
                return   parseInt(e.price)
            })
           currentsum =  sum.reduce(function(acc, val) { return acc + val; })
     
            console.log(currentsum)
        
 
    }
    function productdiscount(){
        if(sum.lenght - 1 > 3){
            discount = Math.ceil(currentsum * (100 - 10)/100    )
            discountpercent = "10%"
        }else if(sum.lenght - 1 > 5){
            discount = Math.ceil(currentsum * (100 - 20)/100    )
            discountpercent = "20%"
        }

    }

    function clearcookie(){
        localStorage.removeItem('users');
        router.refresh()
    }
    if(data){
        sumprice()
        productdiscount()
    }
   
    console.log(discount)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cartbody}>
                    <div className={styles.head}>
                        <div className={styles.icon}>
                            <ShoppingCartCheckoutIcon fontSize='large' />
                        </div>
                        <h2>Mycart</h2>
                        <Button variant="outlined" onClick={()=>{clearcookie()}} color="success">ลบทั้งหมด</Button>    
                    </div>
                    <div className={styles.cartdetails}>
                        {data?.map((e) => {
                            return <Cartcard key={e.id} id={e.id} title={e.title} price={e.price} img={e.img} />
                        })}

                    </div>
                    <div className={styles.cartprice}>
                        <h2>ราคาทั้งหมด {currentsum}</h2>
                        <h2>ส่วนลด{discountpercent ? discountpercent : "ไม่มี"}</h2>
                        <h2>จำนวนเงินที่ต้องชำระ {discount}</h2>
                        <Button variant="outlined" onClick={()=>{setModals(true)}} color="success">ชำระเงิน</Button>
                    </div>
                </div>
               {Modals ? <Modal close={setModals}/>  : "" }
            </div>
        </>
    )
}