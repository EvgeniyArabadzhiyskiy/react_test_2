const Filter = ({ filterValue, onFilterHandler }) => {
  return (
    <label>
      Фильтр по названию
      <input type="text" value={filterValue} onChange={onFilterHandler} />
    </label>
  );
};

export default Filter;
