import PropTypes from 'prop-types';
import { Item, ItemContainer, Button } from './ContactItem.styled';

export default function ContactItem({ name, number, id, deleteContact }) {
  return (
    <Item key={id}>
      <ItemContainer>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button>
      </ItemContainer>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
