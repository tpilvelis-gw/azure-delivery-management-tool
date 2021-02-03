import Task from "./Task";

function UserStoryBar(props) {

    const elements = []
    var maxSize = 0

    props.tasks.forEach(element => {
        maxSize += element.estimate;
    });

    console.log("Cumulative Estimation Size");
    console.log(maxSize);

    props.tasks.forEach(element => {

        const value = element.estimate / maxSize * 100;
        const percentage = value.toString() + "%"
        
        elements.push( <Task 
            estimationSize={percentage}
            progress={element.is_done}
            name={element.name} /> );
    });

    return (
        <>
            <hr/>
            <h3 style={{color:"white", marginBottom:"30px"}}>{props.name}</h3>
            <div name="tasks">
                { elements }
            </div>
            
            
        </>
    );
}

export default UserStoryBar;