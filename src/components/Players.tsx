import React from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { PlayerBox } from './PlayerBox'

export const Players = () => {
    const { player1Turn, player2Turn, counterPlayer1, counterPlayer2 }  = useGlobalContext()

    return (
        <div className={player1Turn || player2Turn ? 'player-turn player' : 'player'}
        >
            { player1Turn ? 'PLAYER 1' : 'PLAYER 2' }
            { player1Turn ?
                <PlayerBox 
                    playerTurn={ player1Turn }
                    counterPlayer={ counterPlayer1 }
                />
                : 
                <PlayerBox
                    playerTurn={ player2Turn }
                    counterPlayer={ counterPlayer2 }
                />
            }
        </div>
    )
}

