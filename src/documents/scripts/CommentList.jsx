/** @jsx React.DOM */

// Create a list of comments
var CommentList = React.createClass({
  render: function() {
    // Return another comment
    var createComment = function(commentData) {
      return (
        <li>
          <Comment comment={commentData}></Comment>
        </li>
      );
    };

    // Create comment list
    return (
      <ul className="component comment-list">
        {this.props.comments.map(createComment, this)}
      </ul>
    );
  }
});
