import { useNavigate, useSearchParams } from 'react-router';
import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  MutableRefObject,
} from 'react';
import getProductRoute from '../../../../utils/nav/getProductRoute';
import { SearchResult } from '../../../../hooks/useSearchResults';

interface Props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  containerRef: MutableRefObject<HTMLFormElement | null>;
  setShowOptions: (show: boolean) => void;
  setSearchTerm: (searchTerm: string) => void;
  searchResults: SearchResult[];
  highlightedIndex: number;
  setHighlightedIndex: (highlightedIndex: number) => void;
}

const useSearchFieldHandlers = ({
  inputRef,
  containerRef,
  setShowOptions,
  setSearchTerm,
  searchResults,
  highlightedIndex,
  setHighlightedIndex,
}: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setShowOptions(true);
  };

  const handleBlur: FocusEventHandler = (event) => {
    if (
      containerRef.current &&
      containerRef.current.contains(event.relatedTarget as Node)
    ) {
      inputRef.current?.focus();
      return;
    }

    setShowOptions(false);
    setSearchTerm('');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyUp: KeyboardEventHandler = (e) => {
    const minIndex = 0;
    const maxIndex = searchResults.length - 1;
    const nextIndex =
      highlightedIndex === maxIndex ? minIndex : highlightedIndex + 1;
    const prevIndex =
      highlightedIndex === minIndex ? maxIndex : highlightedIndex - 1;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(nextIndex);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prevIndex);
    }
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const selectedDevice = searchResults[highlightedIndex]?.device;
    if (selectedDevice) {
      navigate(getProductRoute(selectedDevice.id, searchParams));
    }
  };

  return {
    handleFocus,
    handleBlur,
    handleChange,
    handleKeyUp,
    handleSubmit,
  };
};

export default useSearchFieldHandlers;
