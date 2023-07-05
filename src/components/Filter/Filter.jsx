import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FilterContainer, Input, Text } from './Filter.styled';
import { changeFilter, getFilter } from 'redux/contactsSlice.js';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
