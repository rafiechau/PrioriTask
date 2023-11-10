import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getInitialIconIndex, useDynamicStyles } from '@utils/useDynamicStyles';
import { deleteTaskById, toggleTaskStatus } from '@pages/Home/actions';

import { CheckCircle, CheckCircleOutline, Delete, Edit, HourglassTop, Visibility } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from '@mui/material';

import styles from './style.module.scss';

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const icons = [CheckCircleOutline, HourglassTop, CheckCircle];
  const [iconIndex, setIconIndex] = useState(getInitialIconIndex(task?.status));
  const Icon = icons[iconIndex];
  const { iconClass, priorityClass, statusClass, statusClass2 } = useDynamicStyles(task, styles);

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleToggleStatus = () => {
    console.log(task.id);
    const newIconIndex = (iconIndex + 1) % icons.length;
    setIconIndex(newIconIndex);

  const newStatus = newIconIndex === 0 ? 'todo' : newIconIndex === 1 ? 'progress' : 'done';

    // Dispatch action untuk Redux
    dispatch(toggleTaskStatus(task.id, { ...task, status: newStatus }));
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteTaskById(task?.id));
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
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
            <Edit
              className={`${styles.card__actions__edit} ${styles.card__actions__icon}`}
              onClick={() => navigate(`edit/${task?.id}`)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Delete
              className={`${styles.card__actions__delete} ${styles.card__actions__icon}`}
              onClick={handleDeleteClick}
            />
          </Tooltip>
        </div>
      </div>
      <Dialog className={styles.dialog} open={isDeleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle className={styles.dialog__title}>Delete Task</DialogTitle>
        <DialogContent className={styles.dialog__content}>
          <FormattedMessage id="app_are_you_sure" />
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            onClick={handleDeleteCancel}
            className={`${styles.dialog__button} ${styles.dialog__cancel}`}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDeleteConfirm}
            className={`${styles.dialog__button} ${styles.dialog__delete}`}
          >
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
