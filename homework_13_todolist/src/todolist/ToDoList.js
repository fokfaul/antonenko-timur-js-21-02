import React from 'react';
import './ToDoList.css';
import {Container} from '../components/container/Container';
import { init_toDoList } from '../api-mock/api';
import Task from '../components/task/Task';
import {AddTask} from '../components/addtask/AddTask';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api: init_toDoList };
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  removeTask(index){
    init_toDoList.splice(index, 1);
    this.updateLocalStorage(init_toDoList);
  }

  addTask(task){
    init_toDoList.push({"do": task, "status": false});
    this.updateLocalStorage(init_toDoList);
  }

  updateLocalStorage(arr){
    localStorage.setItem('toDoList', JSON.stringify(arr));
    this.setState({
      api: arr
    });
  }

  render() {
    return (
      <div className="to-do-list">
          <Container>
              {this.state.api.map((elem, index) => (
                <Task
                  task={elem.do}
                  status={elem.status}
                  index={index}
                  key={index}
                  removeTask={this.removeTask}
                />
              ))}
          </Container>
          <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}