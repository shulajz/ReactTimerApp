var React = require('react');
var Clock = require('Clock');
var createReactClass = require('create-react-class');

var Countdown = createReactClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
