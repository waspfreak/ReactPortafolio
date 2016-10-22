var React = require('react');

var Logo = React.createClass({
    render: function() {
        var logoImg = this.props.logoImg;
        var logoAlt = this.props.logoAlt;

        return (
            <div className="logo">
                <img src={logoImg} alt={logoAlt}/>
            </div>
        )
    }
});

module.exports = Logo;
