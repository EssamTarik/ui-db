import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'
import UIDBProvider from './providers/UIDBProvider'

function App() {
  return (
    <UIDBProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </UIDBProvider>
  )
}

export default App
