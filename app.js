var COUNTRIES = ["Afghanistan", "Albania", "Algeria ", "American Samoa ",
  "Andorra ", "Angola ", "Anguilla ", "Antigua & Barbuda ", "Argentina ",
  "Armenia ", "Aruba ", "Australia ", "Austria ", "Azerbaijan ",
  "Bahamas, The", "Bahrain ", "Bangladesh ", "Barbados ", "Belarus ",
  "Belgium ", "Belize ", "Benin ", "Bermuda ", "Bhutan ", "Bolivia ",
  "Bosnia & Herzegovina ", "Botswana ", "Brazil ", "British Virgin Is. ",
  "Brunei ", "Bulgaria ", "Burkina Faso ", "Burma ", "Burundi ", "Cambodia ",
  "Cameroon", "Canada", "Cape Verde", "Cayman Islands",
  "Central African Rep.", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo, Dem. Rep. ", "Congo, Repub. of the", "Cook Islands",
  "Costa Rica", "Cote d'Ivoire ", "Croatia", "Cuba", "Cyprus",
  "Czech Republic ", "Denmark ", "Djibouti",
  "Dominica ", "Dominican  Republic ", "East Timor", "Ecuador", "Egypt",
  "El Salvador ", "Equatorial Guinea ", "Eritrea", "Estonia", "Ethiopia",
  "Faroe Islands", "Fiji",
  "Finland ", "France ", "French Guiana ", "French Polynesia ", "Gabon",
  "Gambia, The ", "Gaza Strip ", "Georgia ", "Germany ", "Ghana ", "Gibraltar",
  "Greece ", "Greenland ", "Grenada ", "Guadeloupe ", "Guam ", "Guatemala",
  "Guernsey ", "Guinea ", "Guinea-Bissau ", "Guyana ", "Haiti ", "Honduras",
  "Hong Kong ", "Hungary ", "Iceland ", "India ", "Indonesia ", "Iran",
  "Iraq", "Ireland ", "Isle of Man ", "Israel ", "Italy ", "Jamaica ", "Japan",
  "Jersey ", "Jordan ", "Kazakhstan ", "Kenya ", "Kiribati ", "Korea, North",
  "Korea, South", "Kuwait", "Kyrgyzstan", "Laos ", "Latvia ", "Lebanon",
  "Lesotho ", "Liberia ", "Libya ", "Liechtenstein ", "Lithuania",
  "Luxembourg", "Macau ", "Macedonia ", "Madagascar ", "Malawi",
  "Malaysia", "Maldives", "Mali ", "Malta ", "Marshall Islands",
  "Martinique ", "Mauritania ", "Mauritius ", "Mayotte ", "Mexico",
  "Micronesia, Fed. St.", "Moldova",
  "Monaco ", "Mongolia ", "Montserrat", "Morocco", "Mozambique", "Namibia",
  "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
  "New Zealand", "Nicaragua", "Niger ", "Nigeria ", "N. Mariana Islands ",
  "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea ",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico ",
  "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena ",
  "Saint Kitts & Nevis", "Saint Lucia", "St Pierre & Miquelon",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe",
  "Saudi Arabia ", "Senegal ", "Serbia ", "Seychelles ", "Sierra Leone",
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa ", "Spain ", "Sri Lanka ", "Sudan ", "Suriname ", "Swaziland",
  "Sweden", "Switzerland ", "Syria ", "Taiwan ", "Tajikistan ", "Tanzania",
  "Thailand", "Togo ", "Tonga ", "Trinidad & Tobago ", "Tunisia ", "Turkey",
  "Turkmenistan ", "Turks & Caicos Is ", "Tuvalu ", "Uganda ", "Ukraine",
  "United Arab Emirates ", "United Kingdom ", "United States ", "Uruguay",
  "Uzbekistan ", "Vanuatu ", "Venezuela ", "Vietnam ", "Virgin Islands",
  "Wallis and Futuna ", "West Bank", "Western Sahara", "Yemen", "Zambia",
  "Zimbabwe"]

  var SearchItemInArray = function SearchItemInArray(items, input) {
    if (input.trim() === '') {
      return [];
    }
    var reg = new RegExp(input, "i");

    return items.filter(function (item) {
      if (reg.test(item)) {
        return item;
      }
    });
  };

  var CountryTable = React.createClass({
    render: function(){
      return (
        <table>
        <tbody>
        {window.results}
        </tbody>
        </table>
      );
    }
  });

  var SearchBar = React.createClass({
    getInitialState: function() {
      return {country: ''};
    },
    callback: function(event){
      this.setState({country: event.target.value});
      console.log(this.state.country);
      this.props.call_add(event);
    },
    render: function(){
      return(
        <div> Enter country name :
          <input type="text" id="country" onChange={this.callback} name="country" value={this.state ? this.state.country : ""} />
          </div>
      );
    }
  });

  var FilterableCountryTable = React.createClass({
    add: function(event){
      if((event.target.value) && (event.target.value.length > 2)){
        console.log(SearchItemInArray(this.props.countries, event.target.value));
        this.props.names = SearchItemInArray(this.props.countries, event.target.value);
      }
    },
    render: function(){
      return (
        <div>
        <SearchBar call_add={this.add}/>
        <CountryTable />
        </div>
      );
    }
  });
  ReactDOM.render(<FilterableCountryTable countries={COUNTRIES} />, document.getElementById('container'));
