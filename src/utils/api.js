import axios from "axios";

export default{
randoUser: function(){return axios.get("https://randomuser.me/api/");},
seed: function(){return axios.get("https://randomuser.me/api/?seed=foobar");}
};