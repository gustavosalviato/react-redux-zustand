import { store } from './store'
import { Player } from './pages/Player'
import { Provider as ReduxProvider } from 'react-redux'

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
