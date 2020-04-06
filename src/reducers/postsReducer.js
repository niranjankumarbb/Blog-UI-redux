const postsInitialState = []

const postsReducer = (state = postsInitialState, action) => {
    switch(action.type) {
        case 'SET_POSTS' : {
            console.log("SET_POSTS ENTERED")
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default postsReducer