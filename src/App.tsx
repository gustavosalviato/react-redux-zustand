import { Player } from "./pages/Player";
import { Provider as ReduxProvider } from 'react-redux'
import { store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>

  )
}