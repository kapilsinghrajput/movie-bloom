import React from 'react'
import Navbar_Item from './Navbar_Item'

export default function Navbar() {
  return (
    <div className=' flex justify-center gap-6 p-2 dark:bg-gray-500 bg-red-200  font-bold' >
        <Navbar_Item title={"Tranding"} param={"fetchTranding"}/>
        <Navbar_Item title={"TopRated"} param={"fetchToprated"}/>
    </div>
  )
}
