import axios from "axios";
import {
  GET_UNBLOCKED_CONTINENT_OPTIONS,
  GET_ALL_AFRICAN_COUNTRIES_OPTIONS,
  GET_UNBLOCKED_AFRICAN_COUNTRIES_OPTIONS,
  GET_COUNTRIES_BY_CONTINENT_OPTIONS,
  GET_ALL_COUNTRIES_OPTIONS,
  GET_STATES_OPTIONS,
  GET_CITY_OPTIONS,
  GET_CATEGORIES_OPTIONS,
  GET_EVENT_TYPE_OPTIONS,
  GET_TARGET_MARKET_OPTIONS,
  GET_CATERING_OPTIONS,
  GET_REVENUE_OPTIONS,
  SET_OPTIONS_LOADING,
  CLEAR_OPTIONS_LOADING,
  SET_PLANNER_OPTIONS_LOADED,
  SET_VENDOR_OPTIONS_LOADED,
  GET_UNBLOCKED_CONTINENTS,
  GET_BUSINESS_TITLE_OPTIONS,
  GET_GENDER_OPTIONS,
  GET_BRANCH1_COUNTRIES,
  GET_BRANCH1_STATE,
  GET_BRANCH2_STATE,
  GET_BRANCH3_STATE,
  GET_BRANCH1_CITY,
  GET_BRANCH2_CITY,
  GET_BRANCH3_CITY,
  GET_BRANCH3_COUNTRIES,
  GET_BRANCH2_COUNTRIES,
  GET_CATEGORIES_OPTIONS_FOR_FILTERS,
  GET_EVENT_TYPE_OPTIONS_FOR_FILTERS,
  SET_FILTER_OPTIONS,
  GET_ALL_CONTINENTS
} from "../types/types";

//Getting All Continents
export const getAllContinents = () => dispatch => {
  const allContinents = [
    { label: "Select Continent", value: "" },
    { label: "Asia", value: "Asia" },
    { label: "Africa", value: "Africa" },
    { label: "Antarctica", value: "Antarctica" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
    { label: "North America", value: "North America" },
    { label: "South America", value: "South America" }
  ];
  dispatch({
    type: GET_ALL_CONTINENTS,
    payload: allContinents
  });
};

//Getting UnBlocked Continents
export const getUnBlockedContinentsOptions = () => dispatch => {
  axios
    .get("/api/location/continents/unblocked")
    .then(ubc => {
      const unBlockedContinentOptions = ubc.data.map((continent, key) => ({
        label: continent.continent,
        value: continent.continent
      }));
      unBlockedContinentOptions.unshift({
        label: "Select Continent..",
        value: ""
      });
      dispatch({
        type: GET_UNBLOCKED_CONTINENT_OPTIONS,
        payload: unBlockedContinentOptions
      });
    })
    .catch(err =>
      dispatch({ type: GET_UNBLOCKED_CONTINENT_OPTIONS, payload: [] })
    );
};

//Getting Countries by Continent
export const getCountriesByContinentOptions = continent => dispatch => {
  axios
    .post("/api/location/countries/continent", continent)
    .then(cbc => {
      const countriesByContinentOptions = cbc.data.map((country, key) => ({
        label: country.name,
        value: country.sortname
      }));
      countriesByContinentOptions.unshift({
        label: "Select Country..",
        value: ""
      });
      dispatch({
        type: GET_COUNTRIES_BY_CONTINENT_OPTIONS,
        payload: countriesByContinentOptions
      });
    })
    .catch(err => console.log(err));
};

export const getBranch1Countries = continent => dispatch => {
  axios
    .post("/api/location/countries/continent", continent)
    .then(cbc => {
      const countriesByContinentOptions = cbc.data.map((country, key) => ({
        label: country.name,
        value: country.sortname
      }));
      countriesByContinentOptions.unshift({
        label: "Select Country..",
        value: ""
      });
      dispatch({
        type: GET_BRANCH1_COUNTRIES,
        payload: countriesByContinentOptions
      });
    })
    .catch(err => console.log(err));
};

export const getBranch2Countries = continent => dispatch => {
  axios
    .post("/api/location/countries/continent", continent)
    .then(cbc => {
      const countriesByContinentOptions = cbc.data.map((country, key) => ({
        label: country.name,
        value: country.sortname
      }));
      countriesByContinentOptions.unshift({
        label: "Select Country..",
        value: ""
      });
      dispatch({
        type: GET_BRANCH2_COUNTRIES,
        payload: countriesByContinentOptions
      });
    })
    .catch(err => console.log(err));
};

export const getBranch3Countries = continent => dispatch => {
  axios
    .post("/api/location/countries/continent", continent)
    .then(cbc => {
      const countriesByContinentOptions = cbc.data.map((country, key) => ({
        label: country.name,
        value: country.sortname
      }));
      countriesByContinentOptions.unshift({
        label: "Select Country..",
        value: ""
      });
      dispatch({
        type: GET_BRANCH3_COUNTRIES,
        payload: countriesByContinentOptions
      });
    })
    .catch(err => console.log(err));
};

//Getting All Countries Options of the World
export const getAllCountriesOptions = () => dispatch => {
  axios
    .get("/api/location/countries/all")
    .then(allCountries => {
      const allCountriesOptions = allCountries.data.map(country => ({
        label: country.name,
        value: country.sortname
      }));
      allCountriesOptions.unshift({ label: "Select Country...", value: "" });
      dispatch({
        type: GET_ALL_COUNTRIES_OPTIONS,
        payload: allCountriesOptions
      });
    })
    .catch(() => dispatch({ type: GET_ALL_COUNTRIES_OPTIONS, payload: [] }));
};

//Getting List of All Countries of Africa
export const getAllAfricanCountries = () => dispatch => {
  console.log("African Countries HIT");
  axios
    .get("/api/location/countries/africa/all")
    .then(africanCountries => {
      console.log("African Countrie", africanCountries);
      const allAfricanCountriesOptions = africanCountries.data.map(
        acountry => ({
          label: acountry.name,
          value: acountry.sortname
        })
      );
      allAfricanCountriesOptions.unshift({
        label: "Select Country...",
        value: ""
      });

      dispatch({
        type: GET_ALL_AFRICAN_COUNTRIES_OPTIONS,
        payload: allAfricanCountriesOptions
      });
      console.log("Dispatch Executed");
    })

    .catch(() =>
      dispatch({ type: GET_ALL_AFRICAN_COUNTRIES_OPTIONS, payload: [] })
    );
};

//Getting List of Options for Unblocked African Countries
export const getUnBlockedAfricanCountries = () => dispatch => {
  axios
    .get("/api/location/countries/africa")
    .then(africanCountries => {
      const labels = [];
      africanCountries.data.forEach(country => {
        labels.push(country.sortname);
      });
      console.log(labels);
      dispatch({
        type: GET_UNBLOCKED_AFRICAN_COUNTRIES_OPTIONS,
        payload: labels
      });
    })
    .catch(() =>
      dispatch({ type: GET_UNBLOCKED_AFRICAN_COUNTRIES_OPTIONS, payload: [] })
    );
};

//Getting State By Country Options
export const getStatesOptions = label => dispatch => {
  axios
    .post("/api/location/countries/states", label)
    .then(states => {
      const stateOptions = states.data.map((state, key) => ({
        label: state.name,
        value: state.id
      }));
      stateOptions.unshift({ label: "Select State...", value: "" });
      dispatch({
        type: GET_STATES_OPTIONS,
        payload: stateOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

export const getBranch1States = label => dispatch => {
  axios
    .post("/api/location/countries/states", label)
    .then(states => {
      const stateOptions = states.data.map((state, key) => ({
        label: state.name,
        value: state.id
      }));
      stateOptions.unshift({ label: "Select State...", value: "" });
      dispatch({
        type: GET_BRANCH1_STATE,
        payload: stateOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

export const getBranch2States = label => dispatch => {
  axios
    .post("/api/location/countries/states", label)
    .then(states => {
      const stateOptions = states.data.map((state, key) => ({
        label: state.name,
        value: state.id
      }));
      stateOptions.unshift({ label: "Select State...", value: "" });
      dispatch({
        type: GET_BRANCH2_STATE,
        payload: stateOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

export const getBranch3States = label => dispatch => {
  axios
    .post("/api/location/countries/states", label)
    .then(states => {
      const stateOptions = states.data.map((state, key) => ({
        label: state.name,
        value: state.id
      }));
      stateOptions.unshift({ label: "Select State...", value: "" });
      dispatch({
        type: GET_BRANCH3_STATE,
        payload: stateOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

//Getting All Cities By State Options
export const getCityOptions = label => dispatch => {
  axios
    .post("/api/location/states/countries", label)
    .then(cities => {
      const cityOptions = cities.data.map((city, key) => ({
        label: city.name,
        value: city.name
      }));
      cityOptions.unshift({ label: "Select City...", value: "" });
      dispatch({
        type: GET_CITY_OPTIONS,
        payload: cityOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

export const getBranch1City = label => dispatch => {
  axios
    .post("/api/location/states/countries", label)
    .then(cities => {
      const cityOptions = cities.data.map((city, key) => ({
        label: city.name,
        value: city.name
      }));
      cityOptions.unshift({ label: "Select City...", value: "" });
      dispatch({
        type: GET_BRANCH1_CITY,
        payload: cityOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

export const getBranch2City = label => dispatch => {
  axios
    .post("/api/location/states/countries", label)
    .then(cities => {
      const cityOptions = cities.data.map((city, key) => ({
        label: city.name,
        value: city.name
      }));
      cityOptions.unshift({ label: "Select City...", value: "" });
      dispatch({
        type: GET_BRANCH2_CITY,
        payload: cityOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

export const getBranch3City = label => dispatch => {
  axios
    .post("/api/location/states/countries", label)
    .then(cities => {
      const cityOptions = cities.data.map((city, key) => ({
        label: city.name,
        value: city.name
      }));
      cityOptions.unshift({ label: "Select City...", value: "" });
      dispatch({
        type: GET_BRANCH3_CITY,
        payload: cityOptions
      });
    })
    .catch(() => dispatch({ type: GET_STATES_OPTIONS, payload: [] }));
};

//Getting All Category Options
export const getCategoriesOptions = categories => dispatch => {
  const categoryOptions = categories.map(category => ({
    label: category.label,
    value: category.label
  }));

  dispatch({
    type: GET_CATEGORIES_OPTIONS,
    payload: categoryOptions
  });

  const websiteFilters = [...categoryOptions];

  websiteFilters.unshift({
    label: "Category...",
    value: ""
  });

  dispatch({
    type: GET_CATEGORIES_OPTIONS_FOR_FILTERS,
    payload: websiteFilters
  });
};
//Getting All Catering Options
export const getCateringOptions = catering => dispatch => {
  const cateringOptions = catering.map((catering, key) => ({
    label: catering.label,
    value: catering.value
  }));
  // cateringOptions.unshift({ label: "Select Catering", value: "" });
  dispatch({
    type: GET_CATERING_OPTIONS,
    payload: cateringOptions
  });
};

//Getting All EventTypes Options
export const getEventTypeOptions = eventTypes => dispatch => {
  const eventTypeOptions = eventTypes.map(eventType => ({
    label: eventType.label,
    value: eventType.label
  }));
  dispatch({
    type: GET_EVENT_TYPE_OPTIONS,
    payload: eventTypeOptions
  });

  const webEventOptions = [...eventTypeOptions];
  webEventOptions.unshift({ label: "Event Types..", value: "" });
  dispatch({
    type: GET_EVENT_TYPE_OPTIONS_FOR_FILTERS,
    payload: webEventOptions
  });
};
//Getting TargetMarket Options
export const getTargetMarketOptions = () => {
  const targetMarketOptions = [
    { label: "Target Market...", value: "" },
    { label: "UpMarket", value: "up" },
    { label: "MainStream", value: "stream" },
    { label: "MarketMix", value: "mix" }
  ];
  return {
    type: GET_TARGET_MARKET_OPTIONS,
    payload: targetMarketOptions
  };
};

export const getRevenueOptions = () => {
  const revenueOptions = [
    { label: "$0 (Beginner)", value: "$0 (Beginner)" },
    { label: "Up to $5,000", value: "Up to $5,000" },
    { label: "$5,000 - $25,000", value: "$5,000 - $25,000" },
    { label: "$25,000 - $50,000", value: "$25,000 - $50,000" },
    { label: "$50,000 - $250,000", value: "$50,000 - $250,000" },
    { label: "$250,000+", value: "$250,000+" }
  ];
  return {
    type: GET_REVENUE_OPTIONS,
    payload: revenueOptions
  };
};

export const getBusinessTitleOptions = () => {
  const businessTitleOptions = [
    { label: "Choose a Business Title...", value: "" },
    { label: "CEO", value: "CEO" },
    { label: "Director", value: "Director" },
    { label: "Managing Director", value: "Managing Director" },
    { label: "General Manager", value: "General Manager" },
    { label: "Supervisor", value: "Supervisor" },
    { label: "Staff", value: "Staff" },
    { label: "Clark", value: "Clark" }
  ];
  return {
    type: GET_BUSINESS_TITLE_OPTIONS,
    payload: businessTitleOptions
  };
};

export const getGenderOptions = () => {
  const genderOptions = [
    { label: "Choose a Title...", value: "" },
    { label: "Mr.", value: "Mr." },
    { label: "Mrs.", value: "Mrs." },
    { label: "Miss.", value: "Miss" }
  ];
  return {
    type: GET_GENDER_OPTIONS,
    payload: genderOptions
  };
};

//Getting List of Planner Options
export const getFilterOptions = () => dispatch => {
  dispatch(getAllAfricanCountries());
  dispatch(getAllCountriesOptions());
  dispatch(getTargetMarketOptions());
  dispatch(setFilterOptionsLoaded());
};

// export const getVendorOptions = () => dispatch => {
//   dispatch(getAllCountriesOptions());
//   dispatch(getTargetMarketOptions());
//   dispatch(clearOptionsLoading());
//   dispatch(setVendorOptionsLoaded());
// };

export const setFilterOptionsLoaded = () => {
  return {
    type: SET_FILTER_OPTIONS,
    payload: true
  };
};

// export const setVendorOptionsLoaded = () => {
//   return {
//     type: SET_VENDOR_OPTIONS_LOADED,
//     payload: true
//   };
// };

// export const clearOptionsLoading = () => {
//   return {
//     type: CLEAR_OPTIONS_LOADING,
//     payload: false
//   };
// };
