import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input className={css.input} type="text" value={value} onChange={(evt) => onChange(evt.target.value)} />
    </div>
  );
};

export default SearchBox;
