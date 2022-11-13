import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>delete</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
