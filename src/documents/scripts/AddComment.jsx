/** @jsx React.DOM */

// Add comment
var AddComment = React.createClass({
  render: function () {
    return (
      <form className="component add-comment">
        <label className="name">{this.props.peer}</label>
        <input type="text" placeholder="Score" />
        <input type="text" placeholder="Comment" />
        <button type="button">Submit</button>
      </form>
    );
  }
});
