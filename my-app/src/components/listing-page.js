import React from "react";
import { connect } from 'react-redux';
import * as actions from '../store/actions';




class Listing extends React.Component{

    constructor(props){
        super(props)
         this.arr=[];
       
    }

    componentDidMount(){
        // this.props.get()
        this.unpackValue(this.props.data)
        
    }
     


    unpackValue(object){
        // console.log("object",this.props)
        let level= 1;
         if(object.employees){
        if(object.employees.length){
            level+=level;
            for(let i of object.employees){
                console.log("iiiiiiiiiiiiii",i)
                this.unpackValue(i)
            }
        }
        this.arr.push({fullName :object.firstName + object.lastName , avatar:object.avatar,id:object.id, rank:level })
    }

    // console.log("last arr", this.arr)
    }

    render(){

        // the console here work 100%, but there are a problem in the results

            console.log("arrrr",this.arr)

            return (
            
            <div>
                {this.arr.length >0 && this.arr.map((person, index) => (
                    <p key={person.fullName} >
                        {person.fullName} </p>
                ))}
                </div>);
    }
}


const mapStateToProps = state => ({
    // data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData())
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);