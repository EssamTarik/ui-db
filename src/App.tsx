import { Routes, Route } from 'react-router';
import UIDBProvider from './providers/UIDBProvider';
import DeviceDetails from './pages/DeviceDetailsPage';
import DeviceGridPage from './pages/DeviceGridPage';
import DataLayout from './components/layout/DataLayout';
import Layout from './components/layout/Layout';
import DeviceTablePage from './pages/DeviceTablePage';
import ErrorBoundary from './components/misc/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <UIDBProvider>
        <Routes>
          <Route element={<DataLayout />}>
            <Route index Component={DeviceTablePage} />
            <Route path="/grid" Component={DeviceGridPage} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/products/:id" Component={DeviceDetails} />
          </Route>
        </Routes>
      </UIDBProvider>
    </ErrorBoundary>
  );
}

export default App;
