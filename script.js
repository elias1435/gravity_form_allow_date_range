
<script>
    jQuery.noConflict();
   jQuery(function() {
    jQuery('input[name="input_5"]').daterangepicker({
       autoUpdateInput: false,
      locale: {
         cancelLabel: 'Clear',
      },
      minDate: moment().startOf('day'),
      changeMonth: false,
      changeYear: false
    });
  jQuery('input[name="input_5"]').on('apply.daterangepicker', function(ev, picker) {
        jQuery(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });
    jQuery('input[name="input_5"]').on('cancel.daterangepicker', function(ev, picker) {
       jQuery(this).val('');
    });
  });
  </script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

