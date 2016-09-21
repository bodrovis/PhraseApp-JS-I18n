jQuery(document).ready(function() {
  Globalize.loadMessages({
    "en": {
      'welcome': 'Welcome, {0}!',
      'earned': 'Today is {date} and you\'ve earned {amount}!'
    }
  });

  var globalize = new Globalize("en");

  $('#welcome').text( globalize.messageFormatter('welcome')(['John']));
  $('#earnings').text(
      globalize.messageFormatter('earned')({
        amount: globalize.formatCurrency(500.5, 'USD'),
        date: globalize.formatDate( new Date(), {
          datetime: "medium"
        })
      })
  )
});