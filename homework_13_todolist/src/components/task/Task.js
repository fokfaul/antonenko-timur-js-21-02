import React from 'react';
import './Task.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleDone = this.handleDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { status: props.status };
  }

  handleDone(e) {
    this.setState({
      status: !this.state.status
    });
  }

  handleRemove(){
    this.props.removeTask(this.props.index);
  }

  render() {
    return (
      <div className="task">
        <input className="task__checkbox" type="checkbox" id={"task-"+this.props.index} name={"task-"+this.props.index}
            checked={this.state.status} onChange={this.handleDone}/>
        <label htmlFor={"task-"+this.props.index}>{this.props.task}</label>
        <div className="task__remove" onClick={this.handleRemove}/>
      </div>
    );
  }
}
