var React = require('react');
var Logo = require('Logo');


class Header extends React.Component {
  render (){
    let logoImg = this.props.logoImg;
    let logoAlt = this.props.logoAlt;
    let titleHeader = this.props.titleHeader;
    let subTitle = this.props.subTitle;

    return(
      <div className="header">
        <div className="title-bar hide-for-large">
          <div className="title-bar-left">
            <button className="menu-icon" type="button" data-open="my-info"></button>
          </div>
        </div>
        <div className="callout primary">
          <div className="row column">
            <div className="top-bar-right">
              {/*<Logo logoImg={logoImg} logoAlt={logoAlt}/>*/}
            </div>
            <h1>{titleHeader}</h1>
            <p className="lead">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  }
};


module.exports = Header;
