/** @jsx React.DOM */

// List of peers
var PeerList = React.createClass({
  getInitialState: function () {},

  render: function () {
    var i = 0;

    // Return another comment
    var createComment = function(commentData) {
      return (
        <AddComment key={i++} peer={commentData}></AddComment>
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
