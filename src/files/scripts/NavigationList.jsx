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
