var React = require('react');
var Logo = require('Logo');
var FontAwesome = require('react-fontawesome');

class Sidebar extends React.Component {
  render (){
    let logoImg = this.props.logoImg;
    let logoAlt = this.props.logoAlt;
    let pic = this.props.pic;
    let nameCv = this.props.nameCv;
    let intro = this.props.intro;
    let subtitle = this.props.subtitle;

    return(
      <div className="off-canvas position-left reveal-for-large sidebar" id="my-info" data-off-canvas data-position="left">
        <div className="row column">
          <Logo logoImg={logoImg} logoAlt={logoAlt}/>
          <img className="cv_picture" src={pic}/>
          <h4 className="cv_title">{nameCv}</h4>
          <h5 className="cv_subtitle">{subtitle}</h5>
          <p>{intro}</p>
        </div>
        <ul className="menu">
         <li><a href="#"><FontAwesome className='icon'name='linkedin'size='2x'/></a></li>
         <li><a href="#"><FontAwesome className='icon'name='facebook'size='2x'/></a></li>
         <li><a href="#"><FontAwesome className='icon'name='phone'size='2x'/></a></li>
        </ul>
      </div>
    );
  }
};

module.exports = Sidebar;
