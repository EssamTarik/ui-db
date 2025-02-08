import { ChangeEventHandler, FocusEventHandler, useRef, useState } from 'react';
import SearchIcon from '../icons/Search';
import styles from './styles.module.css';
import SearchOption from './SearchOption';
import startsWithCaseInsensitive from '../../../utils/startsWithCaseInsensitive';
import { useUIDBContext } from '../../../providers/UIDBProvider/context';

const SearchField = () => {
  const { data } = useUIDBContext();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const isValidSearchTerm = searchTerm?.length >= 2;

  console.log({ isValidSearchTerm });

  const handleFocus = () => {
    console.log('focus');
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setShowOptions(true);
  }

  const handleBlur: FocusEventHandler = (event) => {
    console.log('blur');
    if (containerRef.current && containerRef.current.contains(event.relatedTarget as Node)) {
      inputRef.current?.focus();
      return;
    }

    setShowOptions(false);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  }

  const devices = data?.devices ?? [];

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      className={styles.searchFieldContainer}
    >

      <SearchIcon className={styles.searchIcon} />
      <input
        value={searchTerm}
        onChange={handleChange}
        ref={inputRef}
        placeholder='Search'
        className={styles.searchField}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showOptions && isValidSearchTerm && (
        <div className={styles.searchOptions}>
          {devices.map((device) => {
            const searchOptionProps = {
              id: device.id,
              name: device.product.name,
              shortName: device.shortnames[0],
            };
            if (startsWithCaseInsensitive(device.product.name, searchTerm)) {
              return (
                <SearchOption
                  {...searchOptionProps}
                  key={device.id}
                  highlightMatchLength={searchTerm.length}
                />
              )
            }

            if (startsWithCaseInsensitive(device.shortnames[0], searchTerm)) {
              return (
                <SearchOption
                  {...searchOptionProps}
                  key={device.id}
                  shortName={device.shortnames[0]}
                />
              )
            }

            return null;
          })}
        </div>
      )}
    </div>
  )
}

export default SearchField;