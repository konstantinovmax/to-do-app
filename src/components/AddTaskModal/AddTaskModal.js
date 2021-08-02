import React from 'react';
import './AddTaskModal.css';

function AddTaskModal(props) {
    const [taskName, setTaskName] = React.useState('');

    function handleAddTask(e) {
        setTaskName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddTaskSubmit(taskName);
        setTaskName('');
        props.onCloseModal();
    }

    return (
        <form className={`add-task-modal ${props.isOpen && 'add-task-modal_type_is-open'}`} onSubmit={handleSubmit} noValidate>
            <textarea name="task" type="text" className="add-task-modal__textarea" placeholder="Введите текст задачи" onChange={handleAddTask} value={taskName}/>
            <div className="add-task-modal__buttons-container">
                <button className="add-task-modal__button add-task-modal__button_type_close" onClick={props.onCloseModal}>Закрыть</button>
                <button type="submit" className="add-task-modal__button add-task-modal__button_type_add">Добавить</button>
            </div>
        </form>
    );
}

export default AddTaskModal;
