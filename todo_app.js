let delayInMilliseconds = 5000;

setTimeout(function() {
let task=prompt("Hi there! What do you want to do? Kindly enter as per the instructions given.");

let taskArr=[];
task=task.toLowerCase();
while(task!="quit"){
    if(task=="show"){
        if(taskArr.length===0){
            console.log("No task has been entered by you till now.");
        }
        for(let i=1;i<=taskArr.length;i++){
            console.log(`${i}. ${taskArr[i-1]}`);
        }
        console.log("-------------------------------------------------------------------------------------------------------------------------------------------");
    }
    else if(task=="add"){
    let new_task=prompt("Enter the new task");
    taskArr.push(new_task);
    console.log("Task has been added.")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------");
    }
    else if(task=="delete"){
        let task_num=prompt("Enter the task number that you want to delete");
        taskArr.splice(task_num-1,1);
        console.log("Task has been deleted.")
        console.log("-------------------------------------------------------------------------------------------------------------------------------------------");
    }else{
        console.log("Wrong entry");
        console.log("-------------------------------------------------------------------------------------------------------------------------------------------");
    }
    task=prompt("Enter what do you want to do next");
    task=task.toLowerCase();
}
console.log("You Quit.");
console.log("Thank You!!!");
console.log("Have a nice day and hope you accomplish all your targets.");
}, delayInMilliseconds);