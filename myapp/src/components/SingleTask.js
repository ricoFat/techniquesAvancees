import { FaTimes} from 'react-icons/fa'

const SingleTask =({task, onDelete})=>{
    return(
        <div className="task">
            <h3>
                {task.text}
                <FaTimes 
                style = {{color: 'red' }}
                onClick = {() =>onDelete(task.id)}/>
            </h3>
        </div>
    )
}

export default SingleTask