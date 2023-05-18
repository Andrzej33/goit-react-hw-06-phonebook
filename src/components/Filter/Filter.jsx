import { FilterBox } from './Filter.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { show } from 'Redux/filterSlice';
import { takeFilter } from 'Redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const filterValue = e.currentTarget.value.trim();
    dispatch(show(filterValue));
  };

  const filterValue = useSelector(takeFilter);
  return (
    <FilterBox>
      <label htmlFor="">Find contacts by name</label>{' '}
      <input type="text" value={filterValue} onChange={onChange} />
    </FilterBox>
  );
};
