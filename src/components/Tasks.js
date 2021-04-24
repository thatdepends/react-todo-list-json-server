import Task from './Task'
    //continue or past from the tutorial...tasks 40:46
    const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete}
                 onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default Tasks
