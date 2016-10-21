var React = require('react');


var Sidebar = (props) => {
  return(
    <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
      <div className="row column">
        <img src={logo} width="100px" alt="logo"/>
        <img src={pic}/>
        <h5>{NameCv}</h5>

        <p>{Intro}</p>
      </div>
    </div>
  )
};

let logo = "http://waspfreak.github.io/img/logo.png";
let pic = "http://waspfreak.github.io/img/8807626.png";
let NameCv = "Juliana Leon";
let Intro = "Duis aliquet egestas purus in blandit Curabitur vulputate, ligula lacinia scelerisque tempor,lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo."


module.exports = Sidebar;
