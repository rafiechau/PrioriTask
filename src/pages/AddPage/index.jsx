/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { createTask } from '@domain/api';
import styles from './style.module.scss';
import { resetAddTask, updateTask } from './actions';

const AddPage = () => {
  const dispatch = useDispatch();

  const user = {
    id: 1,
    full_name: 'rafie',
  };
  const taskId = 3;

  const [inputForm, setInputForm] = useState({
    task: '',
    priority: '',
    status: 'Todo',
    description: '',
    author: user?.full_name,
    userId: user?.id,
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.name);
    const { name } = e.target;
    const { value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(e.target.value);
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
  }
  const validate = () => {
    let result = true;
    if (inputForm.description === '' || inputForm.description === null) {
      result = false;
      alert("Description is required")
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('belum ada data');
    if (validate()) {
      if (taskId) {
        dispatch(updateTask(taskId, inputForm));
      } else {
        dispatch(createTask(inputForm));
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
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          maxWidth: '100%',
          marginTop: 3,
        }}
      >
        Tambah Task
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
            name="task"
            type="text"
            label="Task"
            id="fullWidth"
            value={inputForm.task}
            onChange={handleChange}
          />
        </Box>
        <div className={styles.containerCard}>
          <div className={styles.priorityCard} onClick={() => handleSelectPlan('High')} >
            <h3>High</h3>
          </div>
          <div className={styles.priorityCard} onClick={() => handleSelectPlan('Low')}>
            <h3>Low</h3>
          </div>
          <div className={styles.priorityCard} onClick={() => handleSelectPlan('Medium')}>
            <h3>Medium</h3>
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
    </Container>
  );
};

export default AddPage;
