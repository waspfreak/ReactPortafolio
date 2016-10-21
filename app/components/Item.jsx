var React = require('react');

var Item = (props) => {
  return(
    <div className="row small-up-2 medium-up-3 large-up-4">
      <div className="column">
        <a href="">
          <img className="thumbnail" src="http://placehold.it/550x550" />
          <h5>My Site</h5>
        </a>
      </div>

      <div className="column">
        <img className="thumbnail" src="http://placehold.it/550x550" />
        <h5>My Site</h5>
      </div>

      <div className="column">
        <img className="thumbnail" src="http://placehold.it/550x550" />
        <h5>My Site</h5>
      </div>

      <div className="column">
        <img className="thumbnail" src="http://placehold.it/550x550" />
        <h5>My Site</h5>
      </div>

    </div>
  )
};

module.exports = Item;
