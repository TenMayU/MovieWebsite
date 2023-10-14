'use client'
import styles from './page.module.css'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Addcard from '@/component/addcard/cartcard';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react';
import useSWR, { mutate } from 'swr'
export default function addproduct() {
    const router = useRouter()
    const inputRef = useRef()
    const searchParams = useSearchParams()
    const search = searchParams.get('name')
    const fetcher = (...args) => fetch(...args).then(res => (res.json()))
    const { data, error, isLoading, mutate } = useSWR(search ?`https://api.themoviedb.org/3/search/movie?api_key=2435f0876fa2d7b2c5e2fb1de7340068&query=${search}`: "", fetcher)
    console.log(data?.results)
    function getsearch(e) {
        let data = inputRef.current.value
        router.replace(`/addproduct?name=` + data)
    }

    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.cartbody}>
                        <div className={styles.head}>
                            <div className={styles.searchbar} >
                                <div className={styles.icon} ><SearchIcon /></div>
                                <input ref={inputRef} className={styles.search} placeholder='search' />
                                <Button type='submit' onClick={() => { getsearch() }} variant="outlined" color="success">ค้นหา</Button>
                            </div>

                        </div>
                        <div className={styles.cartdetails}>
                          {data?.results.map((e)=>{
                            return <Addcard key={e.id} id={e.id} title={e.original_title} overview={e.overview} img={e.poster_path}/>
                          })}  
                        </div>
                  
                    </div>

                </div>
            </div>
        </>
    )
}