import React, {Component} from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">State, props, children, function, fun!</h4>
          <h6 className="card-subtitle mb-2 text-muted">Message</h6>
          <p className="card-text">{this.props.sayWhat}</p>
        </div>
      </div>
    );
  }
}
export default DisplayComponent;
