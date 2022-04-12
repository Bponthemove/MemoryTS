import React from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { usePlayerContext } from '../hooks/usePlayerContext'

export const PlayerBox = ({ playerTurn, counterPlayer }: { playerTurn: boolean, counterPlayer: number }) => {
    const { draw, winner } = useGlobalContext()
    const { point } = usePlayerContext()

    return (
        <p className={ point && playerTurn ? 'score score-grow' : 'score' } >
            { winner && playerTurn ? 'Winner' : draw ? 'Draw!!' : counterPlayer }
        </p>
    )
}
