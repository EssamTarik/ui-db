import { ReactNode, useEffect, useState } from 'react';
import { UI_DB_PUBLIC_URL } from '../../consts';
import { UIDBData } from './types';
import { UIDBContext } from './context';

const fetchUIDBData = async () => {
  const res = await fetch(UI_DB_PUBLIC_URL);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
};

interface Props {
  children: ReactNode;
}

const UIDBProvider = ({ children }: Props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<UIDBData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      setError(null);

      try {
        const data = await fetchUIDBData();
        setData(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return (
    <UIDBContext.Provider value={{ isFetching, error, data }}>
      {children}
    </UIDBContext.Provider>
  );
};

export default UIDBProvider;
