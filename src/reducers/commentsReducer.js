const commentsInitialState = []

const commentsReducer = (state= commentsInitialState, action)=>{
    console.log('entered commentsreducer')

    switch(action.type){
        case 'SET_COMMENTS' : {
        return [].concat(action.payload)
        }

        default : {
            console.log('entered commentsreducer default')

            return [].concat(state)
        }
    }
}

export default commentsReducer