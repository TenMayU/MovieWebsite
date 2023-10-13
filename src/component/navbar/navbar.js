'use client'
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home';
export default function Navbar() {
    const router = useRouter()
    const [searchbar, setSearch] = useState(false)
    return (
        <>

            <div className={styles.container}>
                <div className={styles.leftside}>
                    <div onClick={() => { router.push(`/?cate=`) }} className={styles.icon}>
                        <HomeIcon />
                    </div>
                    <div onClick={() => { router.push(`/cart`) }} className={styles.icon}>
                        <ShoppingCartIcon />
                    </div>
                </div>


                <form className={styles.searchbar}>
                    <div className={styles.icon} onClick={() => { setSearch(searchbar ? false : true) }}>{searchbar ? <HighlightOffIcon /> : <SearchIcon />}</div>
                    <input className={styles.search + " " + styles[searchbar ? "searchopen" : '']} placeholder='search' />
                    {searchbar ? <Button variant="outlined" color="success">ค้นหา</Button> : ""}
                </form>
            </div>
        </>
    )
}