import { FormattedMessage } from 'react-intl';
import styles from './style.module.scss';

const TaskCard = () => (
  <div className={styles.card}>
    <div className={styles.card__title}>
      <div className={styles.card__title__label}>
        <FormattedMessage id="app_task" />
      </div>
      <div className={styles.card__title__content}>Go to where?</div>
    </div>
  </div>
);

export default TaskCard;
