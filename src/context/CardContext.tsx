import React, { createContext, useState } from 'react'
import { ICardContextProps } from '../utils/types'

export const CardContext = createContext<ICardContextProps | undefined>(undefined)

export const CardContextProvider:React.FC = ({ children }) => {
    
    const value: ICardContextProps = {
    }

    return (
    <CardContext.Provider value={ value }>
        { children }
    </CardContext.Provider>
  )
}
