import api from '../services/api.service';

const state = {
  countries: {},
  cities: {},
  airlines: {}
};

const getters = {
  getAutocompleteList() {
    
  }
};

const actions = {
  async init() {
    const [countries, cities, airlines] = await Promise.all([
      api.getCountries(),
      api.getCities(),
      api.getAirlines()
    ]);
    state.countries = countries;
    state.cities = cities;
    state.airlines = airlines;

    console.log(response);
  }
};

export default {
  state, getters, actions
}
