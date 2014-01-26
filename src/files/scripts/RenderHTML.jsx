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
