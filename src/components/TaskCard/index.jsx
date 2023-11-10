import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CheckCircle, CheckCircleOutline, Delete, Edit, HourglassTop, Visibility } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import styles from './style.module.scss';

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const getInitialIconIndex = (status) => {
    switch (status.toLowerCase()) {
      case 'todo':
        return 0;
      case 'progress':
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
    progress: styles.in_progress,
    done: styles.done,
  };

  const statusStyles2 = {
    todo: styles.todo2,
    progress: styles.in_progress2,
    done: styles.done2,
  };

  const priorityIndex = priorities.indexOf(styles[task?.priority]) || 0;

  const Icon = icons[iconIndex];
  const iconClass = classNames[iconIndex];
  const priorityClass = priorities[priorityIndex];
  const statusClass = statusStyles[task?.status];
  const statusClass2 = statusStyles2[task?.status];

  const handleToggleStatus = () => {
    setIconIndex((iconIndex + 1) % icons.length);
  };

  return (
    <div className={styles.card}>
      <Tooltip title="Toggle Status">
        <div className={`${styles.card__left} ${statusClass}`} onClick={handleToggleStatus}>
          <Icon className={`${styles.card__left__icon} ${iconClass}`} />
        </div>
      </Tooltip>
      <div className={styles.card__right}>
        <div className={styles.card__title}>
          <div className={styles.card__label}>
            <FormattedMessage id="app_task" />
          </div>
          <Tooltip title={task?.title}>
            <div className={styles.card__title__content}>{task?.title}</div>
          </Tooltip>
        </div>
        <div className={styles.card__priority}>
          <div className={styles.card__label}>
            <FormattedMessage id="app_priority" />
          </div>
          <div className={`${styles.card__priority__content} ${priorityClass}`}>
            <FormattedMessage id={`app_priority_${task?.priority}`} />
          </div>
        </div>
        <div className={styles.card__status}>
          <div className={styles.card__label}>
            <FormattedMessage id="app_status" />
          </div>
          <div className={`${styles.card__status__content} ${statusClass2}`}>
            <FormattedMessage id={`app_status_${task?.status}`} />
          </div>
        </div>
        <div className={styles.card__actions}>
          <Tooltip title="View details">
            <Visibility
              className={`${styles.card__actions__view} ${styles.card__actions__icon}`}
              onClick={() => navigate(`detail/${task?.id}`)}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Edit className={`${styles.card__actions__edit} ${styles.card__actions__icon}`} />
          </Tooltip>
          <Tooltip title="Delete">
            <Delete className={`${styles.card__actions__delete} ${styles.card__actions__icon}`} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
