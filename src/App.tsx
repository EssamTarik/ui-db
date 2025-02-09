import { Routes, Route } from 'react-router';
import UIDBProvider from './providers/UIDBProvider';
import ProductTable from './components/ProductTable';
import DeviceDetails from './pages/DeviceDetails';
import DeviceGridPage from './pages/DeviceGridPage';
import DataLayout from './components/layout/DataLayout';
import Layout from './components/layout/Layout';

function App() {
  return (
    <UIDBProvider>
      <Routes>
        <Route element={<DataLayout />}>
          <Route index Component={ProductTable} />
          <Route path="/grid" Component={DeviceGridPage} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/products/:id" Component={DeviceDetails} />
        </Route>
      </Routes>
    </UIDBProvider>
  );
}

export default App;
