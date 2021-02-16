const postsInitialState = []

const postsReducer = (state = postsInitialState, action) => {
    console.log('entered postsreducer')

    switch(action.type) {
        case 'SET_POSTS' : {
            console.log("postreducer SET_POSTS ENTERED")
            return [].concat(action.payload)
        }
        default: {
            console.log('entered postreduce default')

            // return [...state]
            return [].concat(state)
        }
    }
}

export default postsReducer