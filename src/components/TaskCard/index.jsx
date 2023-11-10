import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getInitialIconIndex, useDynamicStyles } from '@utils/useDynamicStyles';

import { CheckCircle, CheckCircleOutline, Delete, Edit, HourglassTop, Visibility } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import styles from './style.module.scss';

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const icons = [CheckCircleOutline, HourglassTop, CheckCircle];
  const [iconIndex, setIconIndex] = useState(getInitialIconIndex(task?.status));
  const Icon = icons[iconIndex];
  const { iconClass, priorityClass, statusClass, statusClass2 } = useDynamicStyles(task, styles);

  const handleToggleStatus = () => {
    const nextIconIndex = (iconIndex + 1) % 3;
    setIconIndex(nextIconIndex);
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
