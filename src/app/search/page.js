'use client'
import styles from './page.module.css'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Addcard from '@/component/addcard/cartcard';
import Card from '@/component/card/card';
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef } from 'react';
import useSWR, { mutate } from 'swr'    
export default function search(){
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('name')
    const fetcher = (...args) => fetch(...args).then(res => (res.json()))
    const { data, error, isLoading, mutate } = useSWR(`/api/post`, fetcher)
    const currentdata = data?.movie.filter((e)=>{
        return e.title === search
       })
    const inputRef = useRef()
    console.log(search)
    function getsearch(e){
         let data = inputRef.current.value
        console.log(data)
        router.replace(`/search?name=`+data) 
        console.log()
    }
    console.log(data)
    return(
        <>
           <div>
           <div className={styles.container}>
                <div className={styles.cartbody}>
                    <div className={styles.head}>
                        <div className={styles.searchbar}>
                    <div className={styles.icon} ><SearchIcon /></div>
                    <input ref={inputRef} className={styles.search}  placeholder='search' />
                    <Button variant="outlined" color="success" onClick={()=>{getsearch()}}>ค้นหา</Button> 
                </div>
              
                    </div>
                    <div className={styles.cartdetails}>
                    {currentdata?.map((e,index)=>{
                                    return <Card key={index} title={e.title} price={e.price} cate={e.cate} img={e.img}/>
                                   })}
                    </div> 
                    
                </div>

            </div>
           </div>
        </>
    )
}