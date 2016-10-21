var React = require('react');

var Header = (props) => {
  return(
    <div>
      <div className="title-bar hide-for-large">
        <div className="title-bar-left">
          <button className="menu-icon" type="button" data-open="my-info"></button>
        </div>
      </div>
      <div className="callout primary">
        <div className="row column">
          <div className="top-bar-right">
            <img src="http://waspfreak.github.io/img/logo.png" width="100px" alt="logo"/>
          </div>
          <h1>Hello! This is a ReactJs </h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla.</p>
        </div>
      </div>
    </div>
  )
};

module.exports = Header;
