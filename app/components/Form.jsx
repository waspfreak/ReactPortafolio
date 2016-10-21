var React = require('react');

var Form = (props) => {
  return(
    <div className="medium-6 columns">
      <label>Name
        <input type="text" placeholder="Name"/>
      </label>
      <label>Email
        <input type="text" placeholder="Email"/>
      </label>
      <label>
        Message
        <textarea placeholder="holla at a designerd"></textarea>
      </label>
      <input type="submit" className="button expanded" value="Submit"/>
    </div>
  )
};

module.exports = Form;
