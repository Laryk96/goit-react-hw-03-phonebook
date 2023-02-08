import PropTypes from 'prop-types';

import {
  ContactsList,
  ContactItem,
  ContactName,
  Button,
  LabelItem,
} from './ContactList.styled';

const ContactList = ({ renderItems, deleteContact }) => {
  return (
    <ContactsList>
      {renderItems[0] && (
        <LabelItem>
          <span>Name:</span>
          <span>Tell:</span>
        </LabelItem>
      )}

      {renderItems.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactName>
            <span> {name}:</span> <span>{number}</span>
          </ContactName>
          <Button
            type="button"
            aria-label="Delete"
            onClick={() => deleteContact(id)}
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactsList>
  );
};
export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  renderItems: PropTypes.array.isRequired,
};
