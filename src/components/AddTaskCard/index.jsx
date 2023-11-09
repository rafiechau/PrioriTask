import { AddTask } from '@mui/icons-material';

import styles from './style.module.scss';

const AddTaskCard = () => (
  <div className={styles.card}>
    <AddTask className={styles.card__icon} />
  </div>
);

export default AddTaskCard;
