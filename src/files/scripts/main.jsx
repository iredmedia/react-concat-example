/** @jsx React.DOM */
// Setup application
var Application = React.createClass({
  // Set the sequence of this
  getInitialState: function() {
    return {
      article: 'posts/test.html',
      html: '',
      posts: []
    };
  },

  request: function (path, callback) {
    $.ajax({
      url: path,
      dataType: 'text',
      success: function(data) {
        callback(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(path, status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount: function () {
    this.request('project.json', function (data) {
      this.setState({
        posts: JSON.parse(data).posts
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="component application">
        <ArticleView html={this.state.html} />
        <NavigationList posts={this.state.posts} />
      </div>
    );
  }
});
/** @jsx React.DOM */
// Setup HTML dangerous renderer
var RenderHTML = React.createClass({
  render: function() {
    return (
      <div
        className="component render-html"
        dangerouslySetInnerHTML={{
          __html: this.props.html
        }}>
      </div>
    );
  }
});

/** @jsx React.DOM */
// Article View
var ArticleView = React.createClass({
  render: function() {
    return (
      <div className="component article-view">
        <h1>Content</h1>
        <RenderHTML className="content" html={this.props.html} />
      </div>
    );
  }
});

/** @jsx React.DOM */
// Navigation View
var NavigationList = React.createClass({
  render: function() {
    function getItem(record) {
      if (record.name === undefined) return;

      return (
        <li>
          <a href={"#!" + record.url}>{record.name}</a>
        </li>
      )
    }

    return (
      <ul className="component navigation-view">
        {this.props.posts.map(getItem)}
      </ul>
    );
  }
});

/** @jsx React.DOM */
React.renderComponent(
  <Application />,
  document.getElementById('app')
);
