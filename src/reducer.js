import { SET_DATA, SET_FEATURE_LIST, SELECT_FEATURES } from './actions'
import moment from 'moment'
const initialState = {
    DATA: null,
    parsedData: {},
    Features: {},
    FeatureList: [],
    SelectedFeatures: []
}

function reducer(state = initialState, action) {
    // console.log('appReducer', action)
    switch (action.type) {
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
        case SET_DATA: {
            if(action.payload){
                const { newMeasurement } = action.payload || {}
                const {metric, value, at, unit} = newMeasurement
                const time = moment(at).format('MM/DD/YYYY HH:MM::SS')
                let graphData = state.DATA
                if(graphData === null){
                    graphData = {}
                }
                if(!graphData[time]){
                    graphData[time] = {name: time}
                }
                graphData[time][metric] = value

                const parsedData = Object.keys(graphData).map( key => graphData[key])
    
                return {
                    ...state,
                    DATA: graphData,
                    parsedData,
                    Features: {...state.Features, [metric]: newMeasurement}
                }
            }
            else{
                return state
            }
        }

        default:
            return state
    }
}

export default reducer