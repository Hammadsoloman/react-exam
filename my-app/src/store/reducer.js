let initialState = { results: {}};

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'GET':

            return { results: payload };
        case 'PUT':
            return state;
        case 'POST':
            let addToCart = [...state.results,payload];
            return { results: addToCart };
        case 'DELETE':
            return state;
        default:
            return state;
    }
}
