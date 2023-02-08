import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';
const Filter = ({ value, toFilter }) => {
  return (
    <Label>
      <span>Find contacts by name</span>
      <Input type="text" name="filter" value={value} onChange={toFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  toFilter: PropTypes.func.isRequired,
};

export default Filter;
