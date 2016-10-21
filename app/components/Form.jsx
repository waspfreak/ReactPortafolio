var React = require('react');

var Form = (props) => {
  return(
    <div className="medium-6 columns">
      <label>{name}
        <input type="text" placeholder="Name"/>
      </label>
      <label>{emailForm}
        <input type="text" placeholder="Email"/>
      </label>
      <label>{messageForm}
        <textarea placeholder="holla at a designerd"></textarea>
      </label>
      <input type="submit" className="button expanded" value="Submit"/>
    </div>
  )
};

let name = "Name";
let emailForm = "Email";
let messageForm = "Message";

module.exports = Form;
