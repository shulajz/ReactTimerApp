var expect = require('expect');
var React = require('react');


var CountdownForm = require('CountdownForm');

describe('CountdownForm', () = >{
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () =>{
    var spy = expect.createSpy();
    var CountdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = ${}
  });
})
