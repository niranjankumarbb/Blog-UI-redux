
const usersInitialState = []

const usersReducer = (state = usersInitialState, action)=>{
    console.log('entered userreducer')

    switch (action.type){
        case 'SET_USERS' : {
            return [].concat(action.payload)
        }

        default : {
            console.log('entered userreducer default')

            return [].concat(state)
        }
    }
}

export default usersReducer