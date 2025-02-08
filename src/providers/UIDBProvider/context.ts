import { createContext, useContext } from 'react';
import { Device, UIDBData } from './types';

interface UIDBState {
  isFetching: boolean;
  error: string | null;
  data: UIDBData | null;
  indexedDevices: {
    [key: string]: Device;
  };
}

const initialValue: UIDBState = {
  isFetching: false,
  error: null,
  data: null,
  indexedDevices: {},
};

export const UIDBContext = createContext<UIDBState>(initialValue);

export const useUIDBContext = () => useContext(UIDBContext);
