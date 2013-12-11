steal('can/component', function(Component){

  return can.Component({
    tag : 'irc-post-input',
    template : 'post-input',
    scope : {
      hello: '@'
    }
  })

});