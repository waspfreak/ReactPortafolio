var React = require('react');
var Sidebar = require('Sidebar');
var Header = require('Header');
var Item = require('Item');
var Footer = require('Footer');
var FontAwesome = require('react-fontawesome');
var Logo = require('Logo');

class Main extends React.Component {
  render (){
    let logoImg = "http://waspfreak.github.io/img/logo.png";
    let logoAlt = "logo";
    let titleHeader = "ReactJs portafolio";
    let subTitle = "One of the most amazing portfolio templates";
    let pic = "http://waspfreak.github.io/img/8807626.png";
    let nameCv = "Juliana Leon";
    let subtitle = "Front End";
    let intro = "Duis aliquet egestas purus in blandit Curabitur vulputate, ligula lacinia scelerisque tempor,lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo.";
    let item = [
      {'id':'uno', 'link': 'www.website.com', 'img': 'http://placehold.it/550x550', 'title': 'Web site'},
      {'id':'dos', 'link': 'www.website.com', 'img': 'http://placehold.it/550x550', 'title': 'Web site'},
      {'id':'tres', 'link': 'www.website.com', 'img': 'http://placehold.it/550x550', 'title': 'Web site'},
      {'id':'uno', 'link': 'www.website.com', 'img': 'http://placehold.it/550x550', 'title': 'Web site'},
      {'id':'dos', 'link': 'www.website.com', 'img': 'http://placehold.it/550x550', 'title': 'Web site'},
      {'id':'tres', 'link': 'www.website.com', 'img': 'http://placehold.it/550x550', 'title': 'Web site'}
    ];


    return(
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <Sidebar pic={pic}
                     nameCv={nameCv}
                     subtitle={subtitle}
                     intro={intro}
                     logoImg={logoImg}
                     logoAlt={logoAlt} />

            <div className="off-canvas-content" data-off-canvas-content>
               <Header titleHeader={titleHeader} subTitle={subTitle} logoImg={logoImg} logoAlt={logoAlt}/>
               <Item item={item}/>
               <Footer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Main;
