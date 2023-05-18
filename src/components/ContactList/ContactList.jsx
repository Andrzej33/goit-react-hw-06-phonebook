import { takeContacts, takeFilter } from 'Redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';

import { ListOfContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(takeContacts);
  const filterValue = useSelector(takeFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return (
      <h3 style={{ paddingLeft: '40px' }}>There are no apropriate contacts</h3>
    );
  }

  return (
    <ListOfContacts>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ListOfContacts>
  );
};
