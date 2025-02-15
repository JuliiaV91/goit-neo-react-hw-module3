import css from './SearchBox.module.css';

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.boxStyle}>
      <p className={css.pStyle}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
export default SearchBox;
