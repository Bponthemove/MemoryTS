import { useContext } from 'react'
import { ShuffleContext } from '../context/ShuffleContext'

export const useShuffleContext = () => {
    const context = useContext(ShuffleContext)
    if (context === undefined) {
        throw Error('data in context is undefined')
    } else
    return (
        context
    )
}