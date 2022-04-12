import { useContext } from 'react'
import { CardContext } from '../context/CardContext'

export const useCardContext = () => {
    const context = useContext(CardContext)
    if (context === undefined) {
        throw Error('data in context is undefined')
    } else
    return (
        context
    )
}
