import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { CheckCircle, CheckCircleOutline, Delete, Edit, HourglassTop, Visibility } from '@mui/icons-material';

import styles from './style.module.scss';

const TaskCard = ({ task }) => {
  const getInitialIconIndex = (status) => {
    switch (status.toLowerCase()) {
      case 'todo':
        return 0;
      case 'in progress':
        return 1;
      case 'done':
        return 2;
      default:
        return 0;
    }
  };

  const [iconIndex, setIconIndex] = useState(getInitialIconIndex(task?.status));
  const icons = [CheckCircleOutline, HourglassTop, CheckCircle];
  const classNames = [styles.icon1, styles.icon2, styles.icon3];
  const priorities = [styles.low, styles.medium, styles.high];

  const statusStyles = {
    todo: styles.todo,
    'in progress': styles.in_progress,
    done: styles.done,
  };

  const priorityIndex = priorities.indexOf(styles[task?.priority]) || 0;

  const Icon = icons[iconIndex];
  const iconClass = classNames[iconIndex];
  const priorityClass = priorities[priorityIndex];
  const statusClass = statusStyles[task?.status];

  const handleClick = () => {
    setIconIndex((iconIndex + 1) % icons.length);
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.card__left} ${statusClass}`} onClick={handleClick}>
        <Icon className={`${styles.card__left__icon} ${iconClass}`} />
      </div>
      <div className={styles.card__right}>
        <div className={styles.card__title}>
          <div className={styles.card__label}>
            <FormattedMessage id="app_task" />
          </div>
          <div className={styles.card__title__content}>{task?.title}</div>
        </div>
        <div className={styles.card__priority}>
          <div className={styles.card__label}>
            <FormattedMessage id="app_priority" />
          </div>
          <div className={`${styles.card__priority__content} ${priorityClass}`}>
            <FormattedMessage id={`app_priority_${task?.priority}`} />
          </div>
        </div>
        <div className={styles.card__actions}>
          <Visibility className={`${styles.card__actions__view} ${styles.card__actions__icon}`} />
          <Edit className={`${styles.card__actions__edit} ${styles.card__actions__icon}`} />
          <Delete className={`${styles.card__actions__delete} ${styles.card__actions__icon}`} />
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
