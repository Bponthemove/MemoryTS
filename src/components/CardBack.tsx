import React from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'

export const CardBack = ({ card }: { card: string }) => {
    const { openCards, winner, draw, turnedCards, setTurnedCards, setShowCard } = useGlobalContext()

    const turn = (id: string) => {
        if (turnedCards < 2) {
            setTurnedCards(prev => prev + 1)
            //the first two images are added to showcard
            setShowCard(prev => [...prev, id])
        }
    }

    return (
        <div    id={ card } 
                onClick={winner || draw ? undefined : e => turn(e.currentTarget.id)}    
                className={openCards.find(x => x === card) ? "card-face-back card-face point" : "card-face-back card-face"}
        >
        </div>
    )
}
