/** @jsx React.DOM */

// Create a comment
var Comment = React.createClass({
  getInitialState: function() {
    return {
      comment: this.props.comment
    }
  },

  render: function() {
    console.log(this.state)
    // Create comment by mapping sequece steps
    return (
      <div>
        <p>{this.state.comment.author}</p>
        <p>{this.state.comment.score}</p>
        <p>{this.state.comment.text}</p>
      </div>
    );
  }
});

// Create a list of comments (each with its own Pattern)
var CommentList = React.createClass({
  // Set the sequence of this
  getInitialState: function() {
    return {
      comments: []
    };
  },

  // Todo: move to middleware
  filterResults: function (comments){
    var index,
        filteredResults = [];

    for (index in comments) {
      if (comments[index].id == this.props.user) {
        filteredResults.push(comments[i]);
      }
    }

    return filteredResults;
  },

  getResultsForUser: function () {
    $.ajax({
      url: 'project.json',
      data: {
        "user": this.props.user
      },
      dataType: 'json',
      success: function(data) {
        this.setState({
          comments: this.filterResults(data.comments)
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("project.json", status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount: function() {
    this.getResultsForUser();
  },

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
      <ul>
        {this.state.comments.map(createComment, this)}
      </ul>
    );
  }
});

var Application = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <h3>Your Reviews</h3>
        <CommentList user={this.props.user} />
      </div>
    );
  }
});

// $.getJSON("project.json", function(json) {
React.renderComponent(
  <Application user={0} />,
  document.getElementById('example')
);
// });
