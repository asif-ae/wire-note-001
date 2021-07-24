import React, { Fragment, useState } from 'react';

interface IProps {
  myTask: ITask[],
  setMyTask?: any,
}

interface IObject {
  target: {
    value: string,
    name: string,
  },
}

interface ITask {
  id: string,
  title: string,
  description?: string,
}

interface IKeyCode {
  keyCode: number,
}

const Input = ({ myTask, setMyTask }: IProps) => {

  let randomString: string;

  const [task, setTask] = useState<ITask>({
    id: '22963349758779',
    title: '',
    description: '',
  });

  const onChangeHandler = (event: IObject) => {
    event.target.name === "title" && setTask({
      ...task,
      title: event.target.value,
    })
    event.target.name === "description" && setTask({
      ...task,
      description: event.target.value,
    })
  }
  
  const onClickHandler = async () => {
    randomString = Math.random() * 100000000000000000 + "";
    await setTask({
      ...task,
      id: randomString,
    })
    
    setMyTask([
      ...myTask,
      task,
    ]);
  }

  const keyDownHandler = (event: IKeyCode) => {
    event.keyCode === 13 && onClickHandler()
  }

  return (
    <Fragment>
      <form className="row m-0 p-0">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="title" name="title" placeholder="My Title" onChange={onChangeHandler} onKeyDown={keyDownHandler} />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="description" name="description" placeholder="My description..." onChange={onChangeHandler} onKeyDown={keyDownHandler} />
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-primary btn-lg mb-3 text-uppercase" onClick={onClickHandler}>Add</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Input;