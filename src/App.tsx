import { Routes, Route } from 'react-router'
import UIDBProvider from './providers/UIDBProvider'
import ProductTable from './components/ProductTable'
import ProductGrid from './components/ProductGrid'
import DataLayout from './components/DataLayout'

function App() {
  return (
    <UIDBProvider>
      <Routes>
        <Route element={<DataLayout />}>
          <Route index Component={ProductTable} />
          <Route path="/grid" Component={ProductGrid} />
        </Route>
      </Routes>
    </UIDBProvider>
  )
}

export default App
