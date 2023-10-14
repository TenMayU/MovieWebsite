'use client'
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { useRef } from 'react';
export default function Navbar() {
    const inputRef = useRef()
    const router = useRouter()
    const [searchbar, setSearch] = useState(false)
    function getsearch(){

        router.push(`/search?name=`+inputRef.current.value)
    }
   
    return (
        <>

            <div className={styles.container}>
                <div className={styles.leftside}>
                    <Link href='http://localhost:3000'  className={styles.icon}>
                        <HomeIcon />
                    </Link >
                    <div onClick={() => { router.push(`/cart`) }} className={styles.icon}>
                        <ShoppingCartIcon />
                    </div>

                    <div onClick={() => { router.push(`/addproduct`) }} className={styles.text}>
                        เพิ่มตัวหนัง
                    </div>
                </div>


                <div className={styles.searchbar}>
                    <div className={styles.icon} onClick={() => { setSearch(searchbar ? false : true) }}>{searchbar ? <HighlightOffIcon /> : <SearchIcon />}</div>
                    <input ref={inputRef} className={styles.search + " " + styles[searchbar ? "searchopen" : '']} placeholder='search' />
                    {searchbar ? <Button variant="outlined" onClick={()=>{getsearch()}} color="success" type='submit'>ค้นหา</Button> : ""}
                </div>
            </div>
        </>
    )
}