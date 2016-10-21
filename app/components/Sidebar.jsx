var React = require('react');


var Sidebar = (props) => {
  return(
    <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
      <div className="row column">
        <img src="http://waspfreak.github.io/img/logo.png" width="100px" alt="logo"/>
        <img src="http://waspfreak.github.io/img/8807626.png"/>
        <h5>Juliana Leon</h5>

        <p>Duis aliquet egestas purus in blandit
          Curabitur vulputate, ligula lacinia scelerisque tempor,
          lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo.</p>
      </div>
    </div>
  )
};

module.exports = Sidebar;
