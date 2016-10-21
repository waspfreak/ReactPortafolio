var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to='timer' activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <IndexLink to='countdow' activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdow</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">by <a href="https://github.com/waspfreak">Waspfreak</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
