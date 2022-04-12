import React from 'react'
import { useCardContext } from '../hooks/useCardContext'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { CardFront } from './CardFront'
import { CardBack } from './CardBack'

export const Cards = () => {
    const { allCardsHidden, showCard, allCards } = useGlobalContext()

    return (
        <>
        {   allCards ? 
            allCards.map((card: any, index: React.Key | null | undefined) => (
                <div className='card-container'> 
                    <div    key={ index }
                            className={ allCardsHidden && !showCard.find((x: any) => x === card) ? 'card' : 'card flip' }>
                        <CardFront card={ card } />
                        <CardBack card={ card } />
                    </div>
                </div>
            ))
            :
            <p>...loading</p>
        }
        </>
    )    
}

