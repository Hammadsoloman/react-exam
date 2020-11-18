import React from "react";
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home'
import data from'./components/data/employees.json';
import Listing  from './components/listing-page'



class App extends  React.Component{

//   constructor(props){
//     super(props)
// }

//   componentDidMount(){
//     this.props.get()
    
// }


  render(){

    console.log('here th data',data)
    return (
  
      <>
      <Header/>
      
      <Route path="/" exact><Home/></Route>
  
      <Route path="/listing" exact> <Listing data={data}/></Route>
      </>
    );
  }
}


// const mapStateToProps = state => ({
//   data: state.data
// });

// const mapDispatchToProps = (dispatch, getState) => ({
//   get: ()=> dispatch(actions.getRemoteData())
  // put: (change,data, id) => dispatch(actions.putRemoteData(change,data, id)),
  // post: (data) => dispatch(actions.postRemoteData(data)),
  // delete : (id) => dispatch(actions.deleteRemoteData(id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
