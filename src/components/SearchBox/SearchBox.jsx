import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return ( 
    <>
    Filter :  <input
      className={css.filter} 
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
    </>
  );
};

export default SearchBox; 
