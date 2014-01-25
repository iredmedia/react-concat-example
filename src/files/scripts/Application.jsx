/** @jsx React.DOM */

// Setup application
var Application = React.createClass({
  // Set the sequence of this
  getInitialState: function() {
    return {
      comments: [],
      peers: []
    };
  },

  // Todo: move to middleware
  filterResults: function (comments){
    var index,
        filteredResults = [];

    for (index in comments) {
      if (comments[index].id == this.props.user) {
        filteredResults.push(comments[index]);
      }
    }

    return filteredResults;
  },

  getInitialData: function () {
    $.ajax({
      url: 'project.json',
      data: {
        "user": this.props.user
      },
      dataType: 'json',
      success: function(data) {
        this.setState({
          comments: this.filterResults(data.comments),
          peers: data.peers
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("project.json", status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount: function() {
    this.getInitialData();
  },

  render: function() {
    return (
      <div className="component application">
        <h1>From your peers</h1>
        <CommentList comments={this.state.comments} />

        <h1>Write review</h1>
        <PeerList peers={this.state.peers} />
      </div>
    );
  }
});
