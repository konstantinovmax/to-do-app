import React from 'react';
import './EditTaskModal.css';

function EditTaskModal(props) {
    const [taskName, setTaskName] = React.useState('');

    function handleEditTask(e) {
        setTaskName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.task.name = taskName;
        props.onCloseModal();
    }

    React.useEffect(() => {
        setTaskName(props.task.name);
    }, [props.task]);

    return (
        <form className={`edit-task-modal ${props.task.id && 'edit-task-modal_type_is-open'}`} onSubmit={handleSubmit} noValidate>
            <input name="task" type="text" className="edit-task-modal__textarea" placeholder="" onChange={handleEditTask} value={taskName || ''} />
            <div className="edit-task-modal__buttons-container">
                <button className="edit-task-modal__button edit-task-modal__button_type_close" onClick={props.onCloseModal}>Закрыть</button>
                <button type="submit" className="edit-task-modal__button edit-task-modal__button_type_add">Сохранить</button>
            </div>
        </form>
    );
}

export default EditTaskModal;
