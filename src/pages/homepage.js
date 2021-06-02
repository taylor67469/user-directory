import API from "../utils/api";
import React, {useState } from "react";
let test1=[];
let test2;
const HomePage= ()=>{
    const [myState,setState]=useState({
        theName:"",
        gender:"",
    });
    API.seed()
    .then(res=>
        test1=res.data.results.forEach(element=>test1.push(((element.name.first)))),
        // test2=test1.forEach(element=>console.log(element))
        // console.log(res.data.results)
    );
    return({

    })
}
export default HomePage;