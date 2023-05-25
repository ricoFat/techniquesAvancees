import SingleTask from './SingleTask'

const ManyTasks = ({tasks, onDeleteMany}) =>{
    return(
        <>
            {tasks.map((task)=>(
                <SingleTask task={task} key={task.id}onDelete = {onDeleteMany}/>
            ))}
        </>
    )
}

export default ManyTasks