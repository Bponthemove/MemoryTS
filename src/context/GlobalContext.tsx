import { createContext, useState, useEffect, useRef } from "react";
import { IGlobalContextProps } from "../utils/types";
import { startArr } from "../utils/data";

export const GlobalContext = createContext<IGlobalContextProps | undefined>(undefined)

export const GlobalContextProvider: React.FC = ({ children }) => {
    const [counterPlayer1, setCounterPlayer1] = useState(0)
    const [counterPlayer2, setCounterPlayer2] = useState(0)
    const [player1Turn, setPlayer1Turn] = useState(false)
    const [player2Turn, setPlayer2Turn] = useState(false)
    const [allCards, setAllCards] = useState(startArr)
    const [allCardsHidden, setAllCardsHidden] = useState(false)
    const [showCard, setShowCard] = useState<string[]>([])
    const [openCards, setOpenCards] = useState<string[]>([])
    const [turnedCards, setTurnedCards] = useState(0)
    const [winner, setWinner] = useState(false)
    const [draw, setDraw] = useState(false)
    const [reset, setReset] = useState(false)
    const firstLoad = useRef(true)

    useEffect(() => {
        //see if there is match
        if (turnedCards !== 2) return
        let match = compare()
        if (match) {
            setOpenCards([...showCard])
            player1Turn ? setCounterPlayer1(prev => prev + 1) : setCounterPlayer2(prev => prev + 1)
        }
        const delayFlipCards : ReturnType<typeof setTimeout> = setTimeout(() => {
            if (!match) {
                setPlayer1Turn(prev => !prev)
                setPlayer2Turn(prev => !prev)
                setShowCard(prev => prev.slice(0, (prev.length - 2)))
            }
            setTurnedCards(0)
        }, 500)
        return () => clearTimeout(delayFlipCards)
    }, [turnedCards])

    useEffect(() => {
        //check for a winner
        if (firstLoad.current) return
        if (counterPlayer1 === 5 || counterPlayer2 === 5 || 
            (counterPlayer1 === 4 && counterPlayer2 === 3 && player1Turn) || 
            (counterPlayer2 === 4 && counterPlayer1 === 3 && player2Turn)) {
            setWinner(true)
            setReset(true)
        }
        if (counterPlayer1 === 4 && counterPlayer1 === counterPlayer2) {
            setDraw(true)
            setReset(true)
            player1Turn ? setPlayer2Turn(true) : setPlayer1Turn(true)   
        }
    }, [counterPlayer1, counterPlayer2, firstLoad])

    useEffect(() => {
        if (!reset) return
        const resetHandle = setTimeout(() => {
            setPlayer1Turn(false)
            setPlayer2Turn(false)
            setOpenCards([])
        }, 3000)

        return () => clearTimeout(resetHandle)   
    }, [reset])
    
    const compare = () => {
        //after image 2 is added we compare
        const card1: string = showCard[showCard.length - 2].slice(0, 3)
        const card2: string = showCard[showCard.length - 1].slice(0, 3)
        //if images are the same return true
        if (card1 === card2) {
            return true
        } else {
            //not the same, return false
            return false
        }
    }


    const value = {
        draw,
        setDraw,
        winner,
        setWinner,
        openCards,
        setOpenCards,
        showCard,
        setShowCard,
        counterPlayer1,
        setCounterPlayer1,
        counterPlayer2,
        setCounterPlayer2,
        player1Turn,
        setPlayer1Turn,
        player2Turn,
        setPlayer2Turn,
        allCards,
        setAllCards,
        allCardsHidden,
        setAllCardsHidden,
        turnedCards,
        setTurnedCards,
        firstLoad,
    }

    return (
        <GlobalContext.Provider value={ value }>
            { children }
        </GlobalContext.Provider>
    )
}