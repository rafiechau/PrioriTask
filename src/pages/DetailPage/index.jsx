import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBack, CheckCircle, CheckCircleOutline, HourglassTop } from '@mui/icons-material';
import { getInitialIconIndex, useDynamicStyles } from '@utils/useDynamicStyles';

import { selectTaskById } from './selectors';

import styles from './style.module.scss';

import { getTaskById } from './actions';

const DetailPage = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const icons = [CheckCircleOutline, HourglassTop, CheckCircle];
  const iconIndex = getInitialIconIndex(task?.status);
  const Icon = icons[iconIndex];
  const { iconClass, priorityClass, statusClass, statusClass2 } = useDynamicStyles(task, styles);

  useEffect(() => {
    dispatch(getTaskById(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <div className={`${styles.card__icon} ${statusClass}`}>
            <Icon className={`${styles.card__icon__content} ${iconClass}`} />
          </div>
          <div className={`${styles.card__status__content} ${statusClass2}`}>
            <FormattedMessage id={`app_status_${task?.status}`} />
          </div>
        </div>

        <div className={styles.card__content}>
          <div className={styles.card__title}>
            <div className={styles.card__title__label}>
              <FormattedMessage id="app_task" />
            </div>
            <div className={styles.card__title__content}>{task?.title}</div>
          </div>

          <div className={styles.card__priority}>
            <div className={styles.card__priority__label}>
              <FormattedMessage id="app_priority" />
            </div>
            <div className={`${styles.card__priority__content} ${priorityClass}`}>
              <FormattedMessage id={`app_priority_${task?.priority}`} />
            </div>
          </div>

          <div className={styles.card__description}>
            <div className={styles.card__description__label}>
              <FormattedMessage id="app_description" />
            </div>
            <div
              className={styles.card__description__content}
              dangerouslySetInnerHTML={{ __html: task?.description }}
            />
          </div>
        </div>
        <div className={styles.card__back} onClick={handleBack}>
          <ArrowBack className={styles.card__back__icon} />
          <FormattedMessage id="app_back" />
        </div>
      </div>
    </div>
  );
};

DetailPage.propTypes = {
  task: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  task: selectTaskById,
});

export default connect(mapStateToProps)(DetailPage);
