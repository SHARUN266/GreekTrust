import React, { createContext, useState } from 'react';

export const CreateContextApp=createContext()

export const ContextProvider=({children})=>{
    const [cart,setCart]=useState([])
    return (
        <CreateContextApp.Provider value={{cart,setCart}}>
            {children}
        </CreateContextApp.Provider>
    )
}