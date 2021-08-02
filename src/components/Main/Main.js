import './Main.css';
import Task from '../Task/Task';

function Main(props) {
    return (
        <div className="main">
            {
                props.tasks.map((task) => (
                    <Task
                    task={task}
                    key={task.id}
                    tasksEditState={props.tasksEditState}
                    onDeleteTask={props.handleDeleteTask}
                    onTaskClick={props.handleEditTaskModalOpen}
                    />
                ))
            }
        </div>
    );
}

export default Main;
