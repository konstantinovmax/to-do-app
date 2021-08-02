import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import AddButton from '../AddButton/AddButton';
import EditTaskModal from '../EditTaskModal/EditTaskModal';

function App() {
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = React.useState(false);
    const [tasks, setTasks] = React.useState([]);
    const [selectedTask, setSelectedTask] = React.useState({});
    const [editTasksDisabled, setEditTasksDisabled] = React.useState(true);

    function handleAddTaskModalOpen() {
        setIsAddTaskModalOpen(true);
    }

    function handleEditTaskModalOpen(task) {
        setSelectedTask(task);
    }

    function handleModalClose() {
        setIsAddTaskModalOpen(false);
        setSelectedTask({});
    }

    function handleAddTaskSubmit(taskName) {
        if (taskName) {
            const newTask = {
                id: Math.floor(Math.random() * 100),
                name: taskName
            }
            setTasks([...tasks, newTask]);
        }
    }

    function handleDeleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    function handleEditTasksEnabled() {
      setEditTasksDisabled(false);
    }

    function handleEditTasksDisabled() {
      setEditTasksDisabled(true);
    }

  return (
    <div className="app">
      <div className="app__content">
        <Header
        onEditTaskEnabled={handleEditTasksEnabled}
        onEditTaskDisabled={handleEditTasksDisabled}
        taskState={editTasksDisabled}
        tasks={tasks}
        />
        <Main
        tasks={tasks}
        tasksEditState={editTasksDisabled}
        handleEditTaskModalOpen={handleEditTaskModalOpen}
        handleDeleteTask={handleDeleteTask}
        />
        <AddButton
        onOpenAddTaskModal={handleAddTaskModalOpen}
        />
        <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onCloseModal={handleModalClose}
        onAddTaskSubmit={handleAddTaskSubmit}
        />
        <EditTaskModal
        task={selectedTask}
        onCloseModal={handleModalClose}
        />
      </div>
    </div>
  );
}

export default App;
