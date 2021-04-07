
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../util/api";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class Newcontainer extends Component{
    state={
        result: {},
        search: "",
        random: ""
    }
    searchBreed = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data.message }))
          .catch(err => console.log(err));
      };
    randomImage(){
    API.random()
    .then(res => this.setState({random:res.data.message}))
}


componentDidMount(){
    this.searchBreed('hound')
    this.randomImage()
}
handleInputChange = event =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
   
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBreed(this.state.search);
  };

render(){
    return(
<Router>
<div>
  <NavTabs />
  <Route exact path="/" component={About} />
  <Route exact path="/discover" render={() =><Blog randomImage={this.state.random}  />}  />
  <Route path="/search" component={Contact} />
</div>
</Router>
)}

}



export default Newcontainer;
