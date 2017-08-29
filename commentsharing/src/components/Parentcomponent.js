import React, {Component} from 'react';
import ChildComponent from '../components/Childcomponent.js';
import DisplayComponent from '../components/Displaycomponent.js';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput(e) {
    e.preventDefault();
    //set state on input change
    let whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console if firing
    console.log("fired");
    //set the state
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear the input
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="col-8">
        <form action="">
          <div className="form-group">
            <input onChange={this.handleInput} type="email" className="form-control" aria-describedby="text input" placeholder="Write something!"/>
          </div>
          <ChildComponent onClick={this.handleSubmit}/>
        </form>
        <DisplayComponent sayWhat={this.state.whatWasSaid}/>
      </div>
    );
  }
}
export default ParentComponent
