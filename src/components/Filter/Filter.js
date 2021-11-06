import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/Phonebook/phonebook-selectors';
import actions from '../../redux/Phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeInput = e => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };
  return (
    <label className={s.text}>
      Find contacts by name
      <input
        className={s.value}
        type="text"
        value={filter}
        onChange={onChangeInput}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
