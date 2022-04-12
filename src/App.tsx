import { Players } from './components/Players'
import { Cards } from './components/Cards'
import './styles/App.css'
import { Shuffle } from './components/Shuffle'
import { CardContextProvider } from './context/CardContext'
import { GlobalContextProvider } from './context/GlobalContext'
import { ShuffleContextProvider } from './context/ShuffleContext'
import { PlayerContextProvider } from './context/PlayerContext'

export const App = () => {    

    return (
        <GlobalContextProvider>
            <main>
                <div className='header'>
                    <PlayerContextProvider>
                        <Players/>
                    </PlayerContextProvider>
                    <div id="shuffle">
                        <ShuffleContextProvider>
                            <Shuffle/>
                        </ShuffleContextProvider>
                    </div>
                    <PlayerContextProvider>
                        <Players/>                        
                    </PlayerContextProvider>
                </div>
                <div id="card-area">
                    <CardContextProvider>
                        <Cards/>
                    </CardContextProvider>
                </div>
                <footer id="footer">Bambam 2021</footer>
            </main>
        </GlobalContextProvider>
    )
}

