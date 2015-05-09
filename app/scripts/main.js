$('#myTab a').click(function (e) {
  'use strict';
  e.preventDefault();
  $(this).tab('show');
});

$(function () {
  'use strict';
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
});

$(function () {
  'use strict';
	var source   = $('#orders-template').html();
	var template = Handlebars.compile(source);

	$('#content-placeholder').html(template(data));

  // example for search function
	// data.users[0].username = 'bank'
	// data = data2;
	// $('#content-placeholder').html(template(data));
});