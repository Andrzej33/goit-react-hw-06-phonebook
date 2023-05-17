// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'Redux/ContactsSlice/slice';


export const ContactItem = ({
  contact: { id, name, number },
  // onDeleteContact,
}) => {
  const dispatch = useDispatch();
  // const id = nanoid()
  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
  
      <button type="button" 
      // onClick={() => onDeleteContact(id)}
onClick={()=>dispatch(remove(id))}
      >
        delete
      </button>
    </>
  );
}

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
