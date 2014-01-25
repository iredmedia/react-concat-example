/** @jsx React.DOM */

// Create a single comment
var Comment = React.createClass({
  render: function() {
    return (
      <ul className="component comment">
        <li className="author">{this.props.comment.author}</li>
        <li className="score">{this.props.comment.score}</li>
        <li className="text">{this.props.comment.text}</li>
      </ul>
    );
  }
});
