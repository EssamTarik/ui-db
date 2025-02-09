import { Routes, Route } from 'react-router';
import UIDBProvider from './providers/UIDBProvider';
import ProductTable from './components/ProductTable';
import DataLayout from './components/DataLayout';
import DeviceDetails from './pages/DeviceDetails';
import Layout from './components/Layout';
import DeviceGridPage from './pages/DeviceGridPage';

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
