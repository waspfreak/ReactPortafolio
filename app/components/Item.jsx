var React = require('react');

class Item extends React.Component {

    render() {
        let elements = this.props.item.map((element, index) => {
            return (
              <div className="column portafolio" key={index}>
                        <a className="portafolio_item" href="#" id={element.id}>
                          <span className="portafolio_hover">View Detail project</span>
                          <img className="portafolio_img" src={element.img}/>
                          <h5 className="portafolio_title">{element.title}</h5>
                        </a>
                  {/*
                    <div id={element.id} class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
                      <h2 id="modalTitle">Awesome. I have it.</h2>
                      <p class="lead">Your couch.  It is mine.</p>
                      <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
                      <a class="close-reveal-modal" aria-label="Close">&#215;</a>
                  </div>*/}
            </div>
            )
        })
        return (
          <div className="row small-up-2 medium-up-2 large-up-3">
              {elements}
          </div>
        )
    }
}

module.exports = Item;
