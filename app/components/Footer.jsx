var React = require('react');
var Form = require('Form');
var FontAwesome = require('react-fontawesome');

var Sidebar = (props) => {
  return(
    <div className="row">
      <h3>Contact Me</h3>
      <div className="medium-6 columns">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
          <ul className="menu">
          <li><FontAwesome className='icon'name='phone'size='1x'/> +44 797977979</li>
          <li><a href="#"><FontAwesome className='icon'name='paper-plane'size='1x'/> julen80@gmail.com</a></li>
          <li><a href="#"><FontAwesome className='icon'name='skype'size='1x'/> juleon</a></li>
          </ul>
         <ul className="menu">
          <li><a href="#"><FontAwesome className='icon'name='linkedin'size='1x'/></a></li>
          <li><a href="#"><FontAwesome className='icon'name='facebook'size='1x'/></a></li>
          <li><a href="#"><FontAwesome className='icon'name='phone'size='1x'/></a></li>
         </ul>
      </div>
      <Form />
    </div>
  )
};

module.exports = Sidebar;
