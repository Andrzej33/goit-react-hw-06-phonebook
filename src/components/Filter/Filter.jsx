import { FilterBox } from './Filter.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { show } from 'Redux/MyValue/slice';
// import PropTypes from 'prop-types'

export const Filter = (
  // { value, onChange }
  ) => {

    const dispatch = useDispatch();
     const onChange = e => {
       const filterValue = e.currentTarget.value.trim();
       dispatch(show(filterValue));
    };
    
    const filterValue = useSelector(state => state.filter)
 return (
    <FilterBox>
      <label htmlFor="">Find contacts by name</label>{' '}
      <input type="text" value={filterValue} onChange={onChange} />
    </FilterBox>
  );
}


// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };