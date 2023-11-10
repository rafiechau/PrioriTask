/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createTask } from '@domain/api';
import { useNavigate, useParams } from 'react-router-dom';
import { selectTaskById } from '@pages/DetailPage/selectors';
import { getTaskById } from '@pages/DetailPage/actions';
import { createStructuredSelector } from 'reselect';
import styles from './style.module.scss';
import { updateTask } from './actions';

const AddPage = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(task);
  // console.log(id);

  const user = {
    id: 1,
    full_name: 'rafie',
  };

  const [inputForm, setInputForm] = useState({
    title: task?.title || '',
    priority: task?.priority || '',
    status: task?.status || 'Todo',
    description: task?.description || '',
    author: user?.full_name,
    userId: user?.id,
  });

  useEffect(() => {
    if (id) {
      dispatch(getTaskById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (task && id) {
      setInputForm({
        title: task?.title || '',
        priority: task?.priority || '',
        status: task?.status || 'Todo',
        description: task?.description || '',
        author: user?.full_name,
        userId: user?.id,
      });
    }
    return () => {
      setInputForm({
        title: task?.title || '',
        priority: task?.priority || '',
        status: task?.status || 'Todo',
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
        console.log(id);
        if (id) {
          dispatch(updateTask(id, taskData));
          // navigate('/');
        } else {
          dispatch(createTask(taskData));
          // navigate('/');
        }
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            maxWidth: '100%',
            marginTop: 3,
          }}
        >
          {id ? 'Edit Task' : 'Tambah Task'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              maxWidth: '100%',
              marginTop: 3,
            }}
          >
            <TextField
              fullWidth
              required
              name="title"
              type="text"
              label="Title"
              id="fullWidth"
              value={inputForm.title}
              onChange={handleChange}
            />
          </Box>
          <div className={styles.containerCard}>
            <div
              className={`${styles.priorityCard} ${inputForm.priority === 'high' ? styles.highPriority : ''}`}
              onClick={() => handleSelectPlan('high')}
            >
              <h3>High</h3>
            </div>
            <div
              className={`${styles.priorityCard} ${inputForm.priority === 'medium' ? styles.mediumPriority : ''}`}
              onClick={() => handleSelectPlan('medium')}
            >
              <h3>Medium</h3>
            </div>
            <div
              className={`${styles.priorityCard} ${inputForm.priority === 'low' ? styles.lowPriority : ''}`}
              onClick={() => handleSelectPlan('low')}
            >
              <h3>Low</h3>
            </div>
          </div>
          <div className={styles.wrapperDescription}>
            <label htmlFor="short-description" className={styles.label}>
              Description
            </label>
            <ReactQuill
              id="short-description"
              theme="snow"
              className={styles.description}
              value={inputForm.description}
              onChange={handleDescriptionChange}
            />
          </div>
          <Button type="submit" color="primary" variant="contained" fullWidth sx={{ marginTop: 3 }}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

AddPage.propTypes = {
  task: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  task: selectTaskById,
});

export default connect(mapStateToProps)(AddPage);
