/** @jsx React.DOM */

// Setup application
var Application = React.createClass({
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

  getPosts: function () {
    this.request('project.json', function (data) {
      this.setState({
        posts: JSON.parse(data).posts
      });
    }.bind(this));
  },

  navigate: function (event) {
    var article = event.target.href.split('#!')[1];

    this.getArticle(article);
  },

  getArticle: function (article) {
    this.request(article, function (data) {
      this.setState({
        html: data
      });
    }.bind(this));
  },

  componentWillMount: function () {
    this.getPosts();
    this.getArticle(this.state.article);
  },

  render: function() {
    return (
      <div className="component application">
        <h2>Navigation</h2>
        <NavigationList onNavigate={this.navigate} posts={this.state.posts} />

        <h2>Article</h2>
        <ArticleView html={this.state.html} />
      </div>
    );
  }
});
