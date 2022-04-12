import React from 'react'
import { data } from '../utils/data'
import { useGlobalContext } from '../hooks/useGlobalContext'

export const CardFront = ({ card }: { card: string }) => {
    const { openCards } = useGlobalContext()

  return (
    <img    
      id={ card } 
      className={openCards.find(x => x === card) ? "card-face-front card-face point" : "card-face-front card-face"}
      src={ data.cha1 }
      alt='of'
    />
  )
}
