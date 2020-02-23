import { SET_FEATURE_LIST, SELECT_FEATURES } from './actions'
const initialState = {
    FeatureList: [],
    SelectedFeatures: []
}
function reducer(state=initialState, action){
    switch(action.type){
        case SET_FEATURE_LIST: {
            const {getMetrics = []} = action.payload || {}
            return {
                ...state,
                FeatureList: getMetrics.map( metric => ({title: metric}))
            }
        }
        case SELECT_FEATURES: {
            return{
                ...state,
                SelectedFeatures: action.payload.map(featureObj => featureObj.title)
            }
        }

        default:
            return state
    }
}

export default reducer