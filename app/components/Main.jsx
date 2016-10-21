var React = require('react');
var Sidebar = require('Sidebar');
var Header = require('Header');
var Item = require('Item');
var Footer = require('Footer');
var FontAwesome = require('react-fontawesome');

// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Main Component</h2>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

        <Sidebar />

        <div className="off-canvas-content" data-off-canvas-content>
            <Header />
            <Item/>
            <Footer/>
          </div>
        </div>

      </div>
    </div>
  )
};



module.exports = Main;
