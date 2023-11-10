/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createTask } from '@domain/api';
import { useNavigate, useParams } from 'react-router-dom';
import { selectTaskById } from '@pages/DetailPage/selectors';
import { getTaskById } from '@pages/DetailPage/actions';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { selectUser } from '@containers/Client/selectors';
import styles from './style.module.scss';
import { updateTask } from './actions';
import Swal from 'sweetalert2';

const AddPage = ({ task, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(task);
  // console.log(user);

  // const user = {
  //   id: 1,
  //   full_name: 'rafie',
  // };

  const [inputForm, setInputForm] = useState({
    title: task?.title || '',
    priority: task?.priority || '',
    status: task?.status || 'todo',
    description: task?.description || '',
    author: user?.fullName,
    userId: user?.id,
  });

  useEffect(() => {
    if (id) {
      dispatch(getTaskById(id));
    } else {
      setInputForm({
        title: '',
        priority: '',
        status: 'todo',
        description: '',
        author: user?.full_name,
        userId: user?.id,
      });
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (task && id) {
      setInputForm({
        title: task?.title || '',
        priority: task?.priority || '',
        status: task?.status || 'todo',
        description: task?.description || '',
        author: user?.full_name,
        userId: user?.id,
      });
    }
    return () => {
      setInputForm({
        title: task?.title || '',
        priority: task?.priority || '',
        status: task?.status || 'todo',
        description: task?.description || '',
        author: user?.full_name,
        userId: user?.id,
      });
    };
  }, [id, task]);

  // console.log(inputForm)
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleDescriptionChange = (description) => {
    // console.log(description);
    const isEmptyParagraph = /^<p><br><\/p>$/i.test(description);
    const updatedDescription = isEmptyParagraph ? null : description;
    // console.log(updatedDescription);
    setInputForm((prev) => ({
      ...prev,
      description: updatedDescription,
    }));
  };
  const validate = () => {
    let result = true;
    if (inputForm.description === '' || inputForm.description === null) {
      result = false;
      alert('Description is required');
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (validate()) {
        const taskData = {
          title: inputForm.title,
          priority: inputForm.priority,
          status: inputForm.status,
          description: inputForm.description,
          author: inputForm.author,
          userId: inputForm.userId,
        };

        // console.log(taskData);
        // console.log(id);
        if (id) {
          dispatch(updateTask(id, taskData));
          Swal.fire({
            title: 'Good job!',
            text: 'Berhasil Update data',
            icon: 'success',
          });
          navigate('/');
        } else {
          Swal.fire({
            title: 'Good job!',
            text: 'Berhasil Menambahkan data',
            icon: 'success',
          });
          navigate('/');
          dispatch(createTask(taskData));
        }
        // navigate('/');
      }
    }
  };

  const handleSelectPlan = (priority) => {
    setInputForm((prev) => ({
      ...prev,
      priority,
    }));
  };

  return (
    <Container maxWidth="xl">
      <div className={styles.containerform}>
        <h2>{id ? <FormattedMessage id="app_header_edit" /> : <FormattedMessage id="app_header_add" />}</h2>
        <form onSubmit={handleSubmit}>

          <div className={styles.containertitle}>
            <label>
              <FormattedMessage id="app_title" />
            </label>
            <input
              required
              name="title"
              type="text"
              label="Title"
              id="fullWidth"
              value={inputForm.title}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="short-description" className={styles.label}>
            <FormattedMessage id="app_priority" />
          </label>
          <div className={styles.containerCard}>
            <div
              className={`${styles.priorityCard} ${inputForm.priority === 'high' ? styles.highPriority : ''}`}
              onClick={() => handleSelectPlan('high')}
            >
              <h3>
                <FormattedMessage id="app_priority_high" />
              </h3>
            </div>
            <div
              className={`${styles.priorityCard} ${inputForm.priority === 'medium' ? styles.mediumPriority : ''}`}
              onClick={() => handleSelectPlan('medium')}
            >
              <h3>
                <FormattedMessage id="app_priority_medium" />
              </h3>
            </div>
            <div
              className={`${styles.priorityCard} ${inputForm.priority === 'low' ? styles.lowPriority : ''}`}
              onClick={() => handleSelectPlan('low')}
            >
              <h3>
                <FormattedMessage id="app_priority_low" />
              </h3>
            </div>
          </div>
          <div className={styles.wrapperDescription}>
            <label htmlFor="short-description" className={styles.label}>
              <FormattedMessage id="app_description" />
            </label>
            <ReactQuill
              id="short-description"
              theme="snow"
              className={styles.description}
              value={inputForm.description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className={styles.containerbutton}>
            <button type="submit">
              {id ? <FormattedMessage id="app_header_edit" /> : <FormattedMessage id="app_header_add" />}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

AddPage.propTypes = {
  task: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  task: selectTaskById,
  user: selectUser,
});

export default connect(mapStateToProps)(AddPage);
