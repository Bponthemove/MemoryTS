import React, { createContext, useState, useEffect } from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'

interface IPlayerContextProps {
  point: boolean
}

export const PlayerContext = createContext<IPlayerContextProps | undefined>(undefined)

export const PlayerContextProvider:React.FC = ({ children }) => {
  const [point, setPoint] = useState(false)
  const { firstLoad, counterPlayer1, counterPlayer2, setPlayer1Turn, setPlayer2Turn, allCards } = useGlobalContext()

  useEffect(() => {
    if (firstLoad.current) return
    const pointAdded: ReturnType<typeof setTimeout> = setTimeout(() => {
      setPoint(prev => !prev)
    }, 2000)
    
    //setPoint(prev => !prev)
        
    return () => clearTimeout(pointAdded)
  }, [counterPlayer1, counterPlayer2, firstLoad])

  useEffect(() => {
    //decide who is who after shuffle or set firstLoad to true after first render
    if (!firstLoad.current) {
        whoIsFirst()
    } else {
        firstLoad.current = false
    }
  }, [allCards, firstLoad])

  const whoIsFirst = () => {                             // decides who goes first and start
      let playerFirst = Math.round(Math.random())
      playerFirst === 0 ? setPlayer1Turn(true) : setPlayer2Turn(true)
  }
    
  const value = { point }

  return (
    <PlayerContext.Provider value={ value }>
        { children }
    </PlayerContext.Provider>
  )
}