import { createContext } from "react";
import { useGlobalContext } from '../hooks/useGlobalContext'
import { IShuffleContextProps } from "../utils/types";

export const ShuffleContext = createContext< IShuffleContextProps | undefined>(undefined)

export const ShuffleContextProvider: React.FC = ({ children }) => {

    const { showCard, setShowCard, winner, setWinner, draw, setDraw, counterPlayer1, 
            setCounterPlayer1, counterPlayer2, setCounterPlayer2, allCardsHidden, setAllCardsHidden, allCards, setAllCards } = useGlobalContext()

    const shuffleHandle = () => {
        if (showCard.length !== 0) setShowCard([])
        if (winner) setWinner(prev => !prev)
        if (draw) setDraw(prev => !prev)
        if (counterPlayer1 !== 0) setCounterPlayer1(0)
        if (counterPlayer2 !== 0) setCounterPlayer2(0)
        if (!allCardsHidden) setAllCardsHidden(true)
        shuffleGrid()
    }

    const shuffleGrid = () => {
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        let tempArr: string[] = []
        while (numbers.length > 0) {
            const randomIndex = Math.floor(Math.random() * numbers.length)
            const randomNumber = numbers[randomIndex]    
            tempArr = [...tempArr, allCards[randomNumber]]
            numbers.splice(randomIndex, 1)
        }        
        setAllCards(tempArr)
    }


    const value = { shuffleHandle }

    return (
        <ShuffleContext.Provider value={ value }>
            { children }
        </ShuffleContext.Provider>
    )
}