import React, { Fragment, useState } from 'react';

interface ITask {
  id: string,
  title: string,
  description?: string,
}

const Tasks = () => {
  const [myTask, setMyTask] = useState<ITask[]>([]);
  console.log(myTask);

  const removeATask = (id: string) => {
    const newTaskList = myTask.filter( (taskID) => taskID.id !== id );
    setMyTask(newTaskList)
  }

  return (
    <Fragment>
      <h1 className="text-center text-success my-5">Add a Task</h1>
      <Input myTask={myTask} setMyTask={setMyTask} />

      <h1 className="text-center text-primary my-5">Task List</h1>
      <div className="row m-0 p-0">
        {
          myTask.map( (task) => {
            console.log(task)
            return (
              <Task id={task.id} title={task.title} description={task.description} key={task.id} removeATask={removeATask} />
            )
          } )
        }
      </div>
    </Fragment>
  );
};

export default Tasks;