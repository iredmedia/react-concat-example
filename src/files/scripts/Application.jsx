/** @jsx React.DOM */

// Setup application
var Application = React.createClass({
  getInitialState: function() {
    return {
      slug: location.hash,
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

      // Get initial page/post
      this.getArticle(this.state.posts[0].url);
    }.bind(this));
  },

  getArticle: function (article) {
    var url = this.getSlug(article);

    this.request(url, function (data) {
      this.setState({
        slug: url,
        html: data
      });
    }.bind(this));
  },

  getSlug: function (hash) {
    return hash.split('#!')[0] || hash.split('#!')[1];
  },

  onHashChange: function(argument) {
    this.getArticle(location.hash);
  },

  componentWillMount: function () {
    this.getPosts();

    window.addEventListener("hashchange", this.onHashChange, false);
  },

  render: function() {
    return (
      <div className="component application">
        <NavigationList posts={this.state.posts} />
        <ArticleView html={this.state.html} />
      </div>
    );
  }
});
