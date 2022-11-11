const ToDo = ({ text, id }) => {
  return (
    <li>
      {text}
      <button>delete</button>
    </li>
  );
};

export default ToDo;
