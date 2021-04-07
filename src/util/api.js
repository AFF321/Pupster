import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed/";

export default {
    search: function(query) {
      return axios.get(BASEURL + query + "/images");
    },
    random: function(){
        console.log('hello')
        return axios.get('https://dog.ceo/api/breeds/image/random')
    }
  };

