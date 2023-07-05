import { Item, ItemContainer, Button } from './ContactItem.styled';

export default function ContactItem({ name, number, id, deleteContact }) {
  return (
    <Item key={id}>
      <ItemContainer>
        <span>{name}: </span>
        <span>{number}</span>

        <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button>
      </ItemContainer>
    </Item>
  );
}
