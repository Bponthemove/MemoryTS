export interface IGlobalContextProps {
    counterPlayer1: number
    setCounterPlayer1: React.Dispatch<React.SetStateAction<number>>
    
    counterPlayer2: number
    setCounterPlayer2: React.Dispatch<React.SetStateAction<number>>
    
    player1Turn: boolean
    setPlayer1Turn: React.Dispatch<React.SetStateAction<boolean>>
    
    player2Turn: boolean
    setPlayer2Turn: React.Dispatch<React.SetStateAction<boolean>>
    
    allCards: string[]
    setAllCards: React.Dispatch<React.SetStateAction<string[]>>
    
    allCardsHidden: boolean
    setAllCardsHidden: React.Dispatch<React.SetStateAction<boolean>>
    
    showCard: string[]
    setShowCard: React.Dispatch<React.SetStateAction<string[]>>
    
    openCards: string[]
    setOpenCards: React.Dispatch<React.SetStateAction<string[]>>

    turnedCards: number
    setTurnedCards: React.Dispatch<React.SetStateAction<number>>
    
    winner: boolean
    setWinner: React.Dispatch<React.SetStateAction<boolean>>

    draw: boolean
    setDraw: React.Dispatch<React.SetStateAction<boolean>>
    
    firstLoad: React.MutableRefObject<boolean>
}

export interface ICardContextProps {

}

export interface IShuffleContextProps {
    shuffleHandle: React.MouseEventHandler<HTMLButtonElement> | undefined
}
