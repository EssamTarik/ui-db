import { useEffect, useRef, useState } from 'react';
import SearchIcon from '../../ui/icons/Search';
import useSearchResults, { MatchType } from '../../../hooks/useSearchResults';
import Popover from '../../ui/Popover';
import styles from './styles.module.css';
import SearchOption from './SearchOption';
import useSearchFieldHandlers from './hooks/useSearchFIeldHandlers';

const MAX_SEARCH_RESULTS = 20;

const SearchField = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLFormElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const isValidSearchTerm = searchTerm?.length >= 2;

  const searchResults = useSearchResults(
    searchTerm,
    isValidSearchTerm ? MAX_SEARCH_RESULTS : 0
  );

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchResults]);

  const { handleSubmit, handleChange, handleFocus, handleBlur, handleKeyUp } =
    useSearchFieldHandlers({
      inputRef,
      containerRef,
      setShowOptions,
      setSearchTerm,
      searchResults,
      highlightedIndex,
      setHighlightedIndex,
    });

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
        <Popover className={styles.searchOptions}>
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
        </Popover>
      )}
    </form>
  );
};

export default SearchField;
