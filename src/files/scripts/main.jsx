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

/** @jsx React.DOM */

/* Render an article.
 * @param array this.props.html
 */
var ArticleView = React.createClass({
  render: function() {
    return (
      <div className="component article-view">
        <RenderHTML className="content" html={this.props.html} />
      </div>
    );
  }
});

/** @jsx React.DOM */

/* Get a collection of posts.
 * @param array this.props.posts
 */
var NavigationList = React.createClass({
  render: function() {
    function getItem(record) {
      if (record.name === undefined) return;

      var slug = "#!" + record.url;

      return (
        <li key={slug}>
          <a onClick={this.props.onNavigate} href={slug}>{record.name}</a>
        </li>
      )
    }

    return (
      <ul className="component navigation-view">
        {this.props.posts.map(getItem, this)}
      </ul>
    );
  }
});

/** @jsx React.DOM */
/* Setup HTML renderer
 * @param string this.props.html
 */
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
React.renderComponent(
  <Application />,
  document.getElementById('app')
);
