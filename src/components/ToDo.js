import { connect } from 'react-redux';
import { actionCreators } from '../store';

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      {text}
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
