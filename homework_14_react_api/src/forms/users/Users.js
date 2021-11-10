import React from 'react';
import './Users.css';
import {Container} from '../../components/container/Container';
import {getUsersList} from '../../api/dumMyApi';
import {User} from '../../components/user/User';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api: [],
                   page: 0,
                   limit: 10
                 };
    this.loadUsers = this.loadUsers.bind(this);
  }

  componentDidMount(): void {
    this.loadUsers(0, 10);
  }

  loadUsers(page, limit){
    getUsersList(page,limit,(resp) => {console.log(resp); return this.setState({api: resp})},console.error)
  }

//  removeTask(index){
//    init_toDoList.splice(index, 1);
//    this.updateLocalStorage(init_toDoList);
//  }
//
//  addTask(task){
//    init_toDoList.push({"do": task, "status": false});
//    this.updateLocalStorage(init_toDoList);
//  }
//
//  updateLocalStorage(arr){
//    localStorage.setItem('toDoList', JSON.stringify(arr));
//    this.setState({
//      api: arr
//    });

  render() {
    return (
      <div className="user-list">
          <Container>
              {this.state.api.map((elem, index) => (
                <User
                  imgUrl={elem.picture}
                  name={elem.firstName+" "+elem.lastName}
                  key={index}
                />
              ))}
          </Container>
      </div>
    );
  }
}