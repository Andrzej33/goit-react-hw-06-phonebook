import { ContactItem } from '../ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import { ListOfContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = (
  // { 
  // contacts,
  //  onDeleteContact }
   ) => {
const contacts = useSelector(state => state.contacts)
  // console.log(contacts);
  return (
    <ListOfContacts>
      {contacts.map(contact => {
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
