/** @jsx React.DOM */

// List of peers
var PeerList = React.createClass({
  getInitialState: function () {},

  render: function () {
    // Return another comment
    var createComment = function(commentData) {
      return (
        <AddComment peer={commentData}></AddComment>
      );
    };

    // Create comment list
    return (
      <div className="component peer-list">
        {this.props.peers.map(createComment, this)}
      </div>
    );
  }
});
