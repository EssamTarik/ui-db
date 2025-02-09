import { useSearchParams } from 'react-router';
import useFilteredData from './useFilteredData';

const DEFAULT_PAGE_SIZE = 20;

const usePaginationData = (pageSize = DEFAULT_PAGE_SIZE) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const data = useFilteredData();
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const pageData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  const goToPage = (page: number) => {
    setSearchParams((currentSearchParams) => {
      currentSearchParams.set('page', page.toString());
      return currentSearchParams;
    });
  };

  return {
    pageData,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
    goToPage,
  };
};

export default usePaginationData;
