import ProgressBar from 'react-bootstrap/ProgressBar'




function Task(props) {
    
    var taskStyle = {
        display:"inline-block"
    }

    taskStyle.width = props.estimationSize;

    return (
        <>
        <div style={ taskStyle }>
            <p style={{fontSize:"50%", color:"white"}} >{ props.name != null ? props.name : "Untitled" }</p>
            <ProgressBar 
                now={props.progress} 
                label={ 
                    props.progress == 50 ? "Active" 
                    : props.progress == 100 ? "Done" : "None"
                } />
        </div>
        </>
    );
}

export default Task;