import { AddTask } from '@mui/icons-material';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const AddTaskCard = ({ onClick }) => (
  <div className={styles.card}>
    <AddTask className={styles.card__icon} onClick={onClick} />
  </div>
);

AddTaskCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddTaskCard;
