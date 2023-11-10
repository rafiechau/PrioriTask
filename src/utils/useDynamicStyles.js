export const getInitialIconIndex = (status) => {
  switch (status?.toLowerCase()) {
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

export const useDynamicStyles = (task, styles) => {
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

  return {
    iconClass: classNames[getInitialIconIndex(task?.status)],
    priorityClass: priorities[priorityIndex],
    statusClass: statusStyles[task?.status],
    statusClass2: statusStyles2[task?.status],
  };
};
