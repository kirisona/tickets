import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// init selects
const selects = document.querySelectorAll('select');
M.FormSelect.init(selects);

// init autocomplete

const autocompletes = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocompletes, {
  data: {
    Apple: null
  }
});

export function getAutocompleteInstance(el) {
  return M.Autocomplete.getInstance(el);
}

// init datapickers
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
  showClearBtn: true,
  format: 'yyyy-mm'
});


