import React from "react";
import ReactDOM from "react-dom";

class TriviaQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="row">
        <h1>{this.props.main_question}</h1>
      </div>
    );
  }
}

export default TriviaQuestion;
