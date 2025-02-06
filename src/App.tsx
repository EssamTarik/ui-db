import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import UIDBProvider from './providers/UIDBProvider'
import ProductTable from './components/ProductTable'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <UIDBProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index Component={ProductTable} />
          <Route path="/grid" Component={ProductGrid} />
        </Route>
      </Routes>
    </UIDBProvider>
  )
}

export default App
