import React from "react";
import { connect } from 'react-redux';
import {getRemoteData}  from '../store/actions';

// import {getRemoteData} from "../store/actions"
// import api from'./data/employees.json';



class Home extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.get()
    }



    render(){

            console.log("proooops",this.props.data)

        return(
           <>
            <div>
              <h3>working employees</h3>
            </div>
            <div>
               <h3>Level 1 employees  1</h3>
            <h3>Level 2 employees  {this.props.data.results.employees && this.props.data.results.employees.length}</h3>
            </div>

            <div>
        <h3>company CEO {this.props.data.results.firstName } {this.props.data.results.lastName}</h3>
            </div>
        </>
        )
    }
}


const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(getRemoteData())
    // put: (change,data, id) => dispatch(actions.putRemoteData(change,data, id)),
    // post: (data) => dispatch(actions.postRemoteData(data)),
    // delete : (id) => dispatch(actions.deleteRemoteData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;