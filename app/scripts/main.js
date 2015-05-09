$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});


$('#datetimepickerDeparture').datetimepicker({
	format: 'DD/MM/YYYY'
});
$('#datetimepickerReturn').datetimepicker({
	format: 'DD/MM/YYYY'
});
$('#scrollPrice').slider({
  id: 'price-search-slider',
  min: 0,
  max: 200,
  range: true,
  value: [0,200]
});
$('#scrollPrice').on('slide', function(slideEvt) {
  $('#priceMin').text(slideEvt.value[0]);
  $('#priceMax').text(slideEvt.value[1]);
});

var source   = $('#orders-template').html();
var template = Handlebars.compile(source);

$('#content-placeholder').html(template(data));

var flightSearch = function (dataLength){
  var data2 = {orders:[]};

  for (var i = 0; i < dataLength; i++) {
      data2.orders[i] = data.orders[i];
  }
  $('#content-placeholder').html(template(data2));
}

$('#searchOneWay').on('click', function () {
  var $btn = $(this).button('loading');
  flightSearch(2);
  $btn.button('reset');
})

$('#searchReturn').on('click', function () {
  var $btn = $(this).button('loading');
  flightSearch(3);
  $btn.button('reset');
})

flightSearch(4);
