import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';

import TaskCard from '@components/TaskCard';
import AddTaskCard from '@components/AddTaskCard';

import { useNavigate } from 'react-router-dom';
import { selectUser } from '@containers/Client/selectors';
import { getAllTasksByUserId } from './actions';

import { selectTasks } from './selectors';

import styles from './style.module.scss';

const Home = ({ tasks, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTasksByUserId(user?.id));
  }, [dispatch, user?.id]);

  const handleAddPage = () => {
    navigate('/add');
  };

  const handleEditPage = (taskId) => {
    navigate(`/edit/${taskId}`);
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <div className={styles.home__title}>
          <FormattedMessage id="app_task_list" onClick={handleEditPage} />
        </div>
      </div>
      <div className={styles.card_container}>
        {tasks.map((task) => (
          <TaskCard key={task?.id} task={task} />
        ))}
        <AddTaskCard onClick={handleAddPage} />
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
