import { countryData } from "./countryData";

const getCountryName = code => {
  for (var i = 0; i < countryData.length; i++) {
    if (countryData[i].Code === code) {
      return countryData[i].Name;
    }
  }
};

export default getCountryName;
