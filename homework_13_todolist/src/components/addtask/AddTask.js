import React from 'react';
import './AddTask.css';
import {Container} from '../container/Container';

export class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleAdd(){
    this.props.addTask(this.state.value);
  }

    render(){
        return (<div className="add-task"><Container>
            <input className="add-task__input" type="text" value={this.state.value} onChange={this.handleChange}/>
            <div className="add-task__button" onClick={this.handleAdd}>В работу</div>
        </Container></div>)
    }
}