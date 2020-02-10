// import React, { Component } from "react";
// import Filters from "../FIlters/Filters";
// import { connect } from "react-redux";
// import { getPlanners } from "../../../../actions/plannerActions";

// import PlannerItem from "../PlannerItem/PlannerItem";

// import {
//   getFilterOptions,
//   getStatesOptions,
//   getCityOptions
// } from "../../../../actions/optionActions";
// import { resetResults } from "../../../../actions/common";
// import Spinner from "../../../common/Spinner/Spinner";
// import NoResults from "../../NoResults";
// import queryString from "query-string";
// import isEmpty from "../../../../utils/is-empty";
// import Pagination from "../../../../utils/Pagination";

// class Planners extends Component {
//   state = {
//     pageNo: 1,
//     acountry: "",
//     country: "",
//     st: "",
//     city: "",
//     eventType: "",
//     categories: "",
//     targetMarket: "",
//     seeAll: false
//   };

//   componentDidMount() {
//     if (!this.props.filtersLoaded) {
//       this.props.getFilterOptions();
//     }

//     if (isEmpty(this.props.pageOfItems)) {
//       const { pathname } = this.props.location;
//       console.log("Initial Call happens");
//       this.handleInitialLoading(pathname);
//     }

//     // if (isEmpty(this.props.pageOfItems)) {

//     // }
//   }

//   handleInitialLoading(pathname) {
//     const { search } = this.props.location;
//     let queryStr = {};
//     const searchQuery = !isEmpty(search) ? queryString.parse(search) : "";
//     if (!isEmpty(searchQuery)) queryStr.url = !isEmpty(search) ? search : "";

//     if (pathname === "/planners") {
//       this.handlePlannersInitialLoading(queryStr);
//     } else if (pathname === "/vendors") {
//       this.handleVendorsInitialLoading(queryStr);
//     }
//   }

//   handlePlannersInitialLoading = queryStr => {
//     !isEmpty(queryStr)
//       ? this.props.getPlanners(queryStr)
//       : this.props.getPlanners();
//   };

//   handleVendorsInitialLoading = queryStr => {
//     !isEmpty(queryStr)
//       ? this.props.getVendors(queryStr)
//       : this.props.getVendors();
//   };

//   shouldComponentRender() {
//     const { loading } = this.props;
//     if (loading === false) return false;
//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { pathname, search } = this.props.location;
//     if (pathname !== prevProps.location.pathname) {
//       this.props.resetResults();
//       pathname === "/planners"
//         ? this.props.getPlanners()
//         : this.props.getVendors();
//     }

//     if (this.state.seeAll !== prevState.seeAll) {
//       pathname === "/planners"
//         ? this.props.getPlanners()
//         : this.props.getVendors();
//     }

//     if (!isEmpty(search)) {
//       let url = search;
//       let pageNo;
//       let newUrl = url.substring(0, url.indexOf("&"));
//       if (!isEmpty(newUrl)) pageNo = newUrl;
//       if (url.includes(pageNo))
//         url.replace(pageNo, `?pageNo=${this.state.pageNo}`);

//       if (search !== prevProps.location.search) {
//         this.props.resetResults();
//         let queryStr = {};
//         queryStr.url = search;
//         if (pathname === "/planners") {
//           this.props.getPlanners(queryStr);
//         } else {
//           this.props.getVendors(queryStr);
//         }
//       }
//     }
//   }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value }, () => {
//       this.handleFilters();
//     });
//   };

//   onSelectCountry = e => {
//     e.preventDefault();
//     const countryCode = e.target.value;
//     const label = {
//       code: countryCode
//     };
//     this.setState({ acountry: countryCode, st: "", city: "" }, () => {
//       this.handleFilters();
//     });

//     this.props.getStatesOptions(label);
//   };

//   onSelectState = e => {
//     e.preventDefault();
//     let index = e.nativeEvent.target.selectedIndex;
//     let label = e.nativeEvent.target[index].text;

//     this.setState({ st: label, city: "" }, () => {
//       this.handleFilters();
//     });

//     let stateValue = e.target.value;
//     const data = {
//       code: stateValue
//     };

//     this.props.getCityOptions(data);
//   };

//   handleFilters = () => {
//     const {
//       country,
//       acountry,
//       st,
//       categories,
//       city,
//       eventType,
//       targetMarket
//     } = this.state;

//     const { pathname } = this.props.location;
//     const { search } = this.props.location;
//     const params = new URLSearchParams(search);
//     const searchQuery = params.get("query") || "";
//     const s = !isEmpty(searchQuery)
//       ? `?pageNo=1&query=${searchQuery}`
//       : "?pageNo=1";

//     let url = !isEmpty(search) ? pathname.concat(s) : pathname;

//     if (this.filtersExist()) {
//       if (!isEmpty(acountry)) {
//         url = this.updateQueryStringParameter(url, "co", acountry);
//       }
//       if (!isEmpty(country)) {
//         url = this.updateQueryStringParameter(url, "co", country);
//       }
//       if (!isEmpty(st)) {
//         url = this.updateQueryStringParameter(url, "st", st);
//       }
//       if (!isEmpty(city)) {
//         url = this.updateQueryStringParameter(url, "ct", city);
//       }
//       if (!isEmpty(categories)) {
//         url = this.updateQueryStringParameter(url, "cat", categories);
//       }
//       if (!isEmpty(eventType)) {
//         url = this.updateQueryStringParameter(url, "et", eventType);
//       }
//       if (!isEmpty(targetMarket)) {
//         url = this.updateQueryStringParameter(url, "tm", targetMarket);
//       }
//     }

//     this.props.history.push(url);
//   };

//   filtersExist = () => {
//     const {
//       country,
//       acountry,
//       st,
//       categories,
//       city,
//       eventType,
//       targetMarket
//     } = this.state;
//     if (
//       isEmpty(country) &&
//       isEmpty(acountry) &&
//       isEmpty(st) &&
//       isEmpty(categories) &&
//       isEmpty(city) &&
//       isEmpty(eventType) &&
//       isEmpty(targetMarket)
//     ) {
//       return false;
//     } else return true;
//   };

//   clearFilters = () => {
//     this.setState(
//       {
//         country: "",
//         acountry: "",
//         st: "",
//         city: "",
//         eventType: "",
//         categories: "",
//         targetMarket: ""
//       },
//       () => this.handleFilters()
//     );
//   };

//   updateQueryStringParameter = (uri, key, value) => {
//     var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
//     var separator = uri.indexOf("?") !== -1 ? "&" : "?";
//     if (uri.match(re)) {
//       return uri.replace(re, "$1" + key + "=" + value + "$2");
//     } else {
//       return uri + separator + key + "=" + value;
//     }
//   };

//   seeAll = () => {
//     this.setState({ seeAll: !this.state.seeAll });
//   };

//   createImages = images => {
//     let imageValues = [];
//     for (let i = 0; i < images.length; i++) {
//       if (!isEmpty(images[i])) {
//         imageValues.push(images[i]);
//       }
//     }
//     return imageValues;
//   };

//   render() {
//     const {
//       country,
//       acountry,
//       st,
//       city,
//       eventType,
//       categories,
//       targetMarket
//     } = this.state;

//     const { pathname } = this.props.location;
//     const vendorStyling = pathname === "/vendors" ? "vendor" : "";

//     const {
//       pager,
//       pageOfItems,
//       allAfricanCountriesOptions,
//       allCountriesOptions,
//       stateOptions,
//       cityOptions,
//       eventTypeOptions,
//       targetMarketOptions,
//       categoriesOptions,
//       t
//     } = this.props;
//     const { search } = this.props.location;
//     const s = !isEmpty(search) ? search : "";

//     // Adding dynamic value for Label for Categories

//     return (
//       <section className="admin-section d-flex justify-content-center">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-2">
//               <Filters
//                 country={country}
//                 acountry={acountry}
//                 st={st}
//                 city={city}
//                 categories={categories}
//                 eventType={eventType}
//                 targetMarket={targetMarket}
//                 africanCountriesOptions={allAfricanCountriesOptions}
//                 countriesOptions={allCountriesOptions}
//                 pathname={pathname}
//                 eventTypeOptions={eventTypeOptions}
//                 stateOptions={stateOptions}
//                 cityOptions={cityOptions}
//                 categoryOptions={categoriesOptions}
//                 targetMarketOptions={targetMarketOptions}
//                 onSelectCountry={this.onSelectCountry}
//                 onSelectState={this.onSelectState}
//                 clearFilters={this.clearFilters}
//                 onChange={this.onChange}
//                 filtersExist={this.filtersExist}
//                 t={t}
//               />
//             </div>
//             <div className="col-md-10">
//               <div className={vendorStyling}>
//                 <div className="packages-area">
//                   {this.shouldComponentRender() ? (
//                     <Spinner />
//                   ) : (
//                     [
//                       this.props.noResults ? (
//                         <NoResults seeAll={this.seeAll} pathname={pathname} />
//                       ) : (
//                         pageOfItems.map(user => (
//                           <PlannerItem
//                             key={user._id}
//                             user={user}
//                             imageValues={
//                               user.images
//                                 ? this.createImages(Object.values(user.images))
//                                 : []
//                             }
//                             pathname={pathname}
//                             t={t}
//                           />
//                         ))
//                       )
//                     ]
//                   )}

//                   {!this.props.noResults &&
//                   !this.shouldComponentRender() &&
//                   pager.pages &&
//                   pager.pages.length ? (
//                     <Pagination
//                       pager={pager}
//                       loadPage={this.loadPage}
//                       s={s}
//                       url="a"
//                     />
//                   ) : null}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   allAfricanCountriesOptions: state.options.allAfricanCountriesOptions,
//   allCountriesOptions: state.options.allCountriesOptions,
//   cityOptions: state.options.cityOptions,
//   stateOptions: state.options.stateOptions,
//   categoriesOptions: state.options.webCatOptions,
//   eventTypeOptions: state.options.webEventOptions,
//   targetMarketOptions: state.options.targetMarketOptions,
//   filtersLoaded: state.options.filtersLoaded,
//   pager: state.common.pager,
//   pageOfItems: state.common.pageOfItems,
//   vendors: state.vendor.vendors,
//   loading: state.common.loading,
//   noResults: state.common.noResults,
//   t: state.common.translatedLabels
// });
// export default connect(mapStateToProps, {
//   resetResults,
//   getPlanners,
//   getVendors,
//   getFilterOptions,
//   getStatesOptions,
//   getCityOptions
// })(Planners);
