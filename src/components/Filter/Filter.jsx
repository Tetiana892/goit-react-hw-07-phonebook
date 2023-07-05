import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FilterContainer, Input, Text } from './Filter.styled';
import { changeFilter } from 'redux/contactsSlice.js';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        placeholder="Name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
