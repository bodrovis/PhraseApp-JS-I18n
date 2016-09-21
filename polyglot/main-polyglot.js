jQuery(document).ready(function() {
  var polyglot = new Polyglot({
    phrases: {
      "hello": "Hello, %{name}!",
      "unread": "You have %{smart_count} unread message |||| You have %{smart_count} unread messages"
    }
  });

  var main_content_temp = _.template($('#main-content').html());
  $('body').prepend(main_content_temp({
    hello: polyglot.t('hello', {name: 'John'}),
    unread: polyglot.t('unread', {smart_count: 2})
  }));
});