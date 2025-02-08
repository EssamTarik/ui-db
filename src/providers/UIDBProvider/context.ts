import { createContext, useContext } from 'react';
import { UIDBData } from './types';

interface UIDBState {
  isFetching: boolean;
  error: string | null;
  data: UIDBData | null;
}

const initialValue: UIDBState = {
  isFetching: false,
  error: null,
  data: null,
};

export const UIDBContext = createContext<UIDBState>(initialValue);

export const useUIDBContext = () => useContext(UIDBContext);
