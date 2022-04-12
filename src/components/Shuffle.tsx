import React from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useShuffleContext } from '../hooks/useShuffleContext'

export const Shuffle = () => {
    const { player1Turn, player2Turn } = useGlobalContext()
    const { shuffleHandle } = useShuffleContext()

  return (
    <>
        <button className={player1Turn || player2Turn ? "shuffle-button shuffle-button-off" : "shuffle-button"} 
                onClick={ shuffleHandle }
                disabled={player1Turn || player2Turn}
        >
        PLAY!
        </button>
        <p className={!player2Turn && !player1Turn ? 'shuffle-para' : 'shuffle-para shuffle-para-off'}>
            Press the button to play
        </p>
    </>
  )
}
