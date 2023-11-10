import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';

import { selectTaskById } from './selectors';

import styles from './style.module.scss';

const DetailPage = ({ task }) => {
  const dispatch = useDispatch();
  return <div>asdad</div>;
};

DetailPage.propTypes = {
  task: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  task: selectTaskById,
});

export default connect(mapStateToProps)(DetailPage);
