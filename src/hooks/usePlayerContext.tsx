import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

export const usePlayerContext = () => {
    const context = useContext(PlayerContext)
    if (context === undefined) {
        throw Error('data in context is undefined')
    } else
    return (
        context
    )
}