import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import SearchIcon from '../icons/Search';
import useSearchResults, { MatchType } from '../../../hooks/useSearchResults';
import styles from './styles.module.css';
import SearchOption from './SearchOption';

const MAX_SEARCH_RESULTS = 20;

const SearchField = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLFormElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const isValidSearchTerm = searchTerm?.length >= 2;
  const navigate = useNavigate();

  const searchResults = useSearchResults(
    searchTerm,
    isValidSearchTerm ? MAX_SEARCH_RESULTS : 0
  );

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchResults]);

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
      navigate(`/product/${selectedDevice.id}`);
    }
  };

  const hasSearchResults = searchResults.length > 0;

  return (
    <form
      ref={containerRef}
      tabIndex={-1}
      className={styles.searchFieldContainer}
      onSubmit={handleSubmit}
    >
      <SearchIcon className={styles.searchIcon} />
      <input
        value={searchTerm}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Search"
        className={styles.searchField}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
      />
      {showOptions && hasSearchResults && (
        <div className={styles.searchOptions}>
          {searchResults.map(({ device, matchType }, index) => {
            return (
              <SearchOption
                key={device.id}
                id={device.id}
                shortName={device.shortnames[0]}
                name={device.product.name}
                highlightMatchLength={
                  matchType === MatchType.NAME ? searchTerm.length : 0
                }
                highlighted={index === highlightedIndex}
              />
            );
          })}
        </div>
      )}
    </form>
  );
};

export default SearchField;
