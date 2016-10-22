var React = require('react');
var Form = require('Form');
var FontAwesome = require('react-fontawesome');


var Sidebar = (props) => {
  return(
    <div className="row footer">
      <h3>{title}</h3>
      <div className="medium-6 columns">
        <p>{text}</p>
          <ul className="menu">
          <li><FontAwesome className='icon'name='phone'/> {phone}</li>
          <li><a href="#"><FontAwesome className='icon'name='paper-plane'/> {email}</a></li>
          <li><a href="#"><FontAwesome className='icon'name='skype'/> {skype}</a></li>
          </ul>
      </div>
      <Form />
    </div>
  )
};
let title = "Contact Me";
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna";
let phone = "+44 797977979";
let email = "juleon80@gmail.com";
let skype = "juleon";

module.exports = Sidebar;
