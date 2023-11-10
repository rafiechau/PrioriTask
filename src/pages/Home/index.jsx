import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';

import TaskCard from '@components/TaskCard';
import AddTaskCard from '@components/AddTaskCard';

import { selectUser } from '@containers/Client/selectors';
import { getAllTasksByUserId } from './actions';
import { selectTasks } from './selectors';

import styles from './style.module.scss';

const Home = ({ tasks, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksByUserId(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <div className={styles.home__title}>
          <FormattedMessage id="app_task_list" />
        </div>
      </div>
      <div className={styles.card_container}>
        {tasks.map((task) => (
          <TaskCard key={task?.id} task={task} />
        ))}
        <AddTaskCard />
      </div>
    </div>
  );
};

Home.propTypes = {
  tasks: PropTypes.array,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  tasks: selectTasks,
  user: selectUser,
});

export default connect(mapStateToProps)(Home);
