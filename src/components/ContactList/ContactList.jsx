import { ContactItem } from '../ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import { ListOfContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = (
 
   ) => {
const contacts = useSelector(state => state.contacts);
const filterValue = useSelector(state => state.filter);

const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))

 
  return (
    <ListOfContacts>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact}
            //  onDeleteContact={onDeleteContact}
              />
          </li>
        );
      })}
    </ListOfContacts>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
