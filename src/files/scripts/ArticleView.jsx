/** @jsx React.DOM */

/* Render an article.
 * @param array this.props.html
 */
var ArticleView = React.createClass({
  render: function() {
    return (
      <div
      	className="component article-view"
	      dangerouslySetInnerHTML={{
          __html: this.props.html
        }}
      />
    );
  }
});
