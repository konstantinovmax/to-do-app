import './AddButton.css';

function AddButton(props) {
  return (
    <button className="add-button" onClick={props.onOpenAddTaskModal}></button>
  );
}

export default AddButton;
