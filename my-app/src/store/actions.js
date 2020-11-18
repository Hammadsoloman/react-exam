import axios from "axios";
const api  = require('../components/data/employees.json');
axios.defaults.baseURL = "http://localhost:3000/";



export function getRemoteData(){
    return function(dispatch){
        axios.get(api)
            .then((response) => {
                dispatch(getAction(response));
            })
          
    }
}

export const putRemoteData = (change, data,id) => async dispatch => {
    data.quantity = parseInt(change);
    return axios.put(`${api}/${id}`)
    .send(data)
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .then(response => {
        dispatch(putAction(response));
    });
}




export const deleteRemoteData = (employee) => async dispatch => {
    await (await axios.delete(`${api}/${employee._id}`));
    dispatch(deleteAction(employee));
}

export const postRemoteData = (data) => async dispatch => {

    data.quantity = 1;
    return axios.post(api)
        .send(data)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .then(response => {
            dispatch(postAction(response.body));
        });

}



export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const putAction = payload => {
    console.log('payload',payload)
    return {
        type: 'PUT',
        payload: payload
    }
}

export const postAction = payload => {
    return {
        type: 'POST',
        payload: payload
    }
}

export const deleteAction = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}