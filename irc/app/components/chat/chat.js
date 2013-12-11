steal('can/component', function(Component){

  return can.Component({
    tag : 'irc-chat',
    template : 'chat',
    scope : {
      hello: '@'
    }
  })

});