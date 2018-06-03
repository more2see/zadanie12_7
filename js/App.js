var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3307',
  'X-Auth-Token': '549ad9b2824771f901a9a5aed7bb7343'
};
$.ajaxSetup({
  headers: myHeaders
});
$.ajax({
  url: baseUrl + '/board',
  method: 'GET',
  success: function(response) {
    setupColumns(response.columns);
  }
});

function setupColumns(columns) {
  columns.forEach(function(column) {
    var col = new Column(column.id, column.name);
    board.createColumn(col);
    setupCards(col, column.cards);
  });
}
function setupCards(col, cards) {
  cards.forEach(function(card) {
    var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    col.createCard(cardObj);
  });
}
/* Poniżej nie wiem czy jest dobre 
Column.prototype = {
  createCard: function(card) {
    this.element.children('ul').append(card.element);
  },
  deleteColumn: function() {
    this.element.remove();
  }
};
*/