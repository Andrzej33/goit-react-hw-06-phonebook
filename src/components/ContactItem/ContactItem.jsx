import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'Redux/contactsSlice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>

      <button type="button" onClick={() => dispatch(remove(id))}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
