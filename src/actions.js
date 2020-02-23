
const SET_FEATURE_LIST = 'app/SET_FEATURE_LIST'
const SELECT_FEATURES = 'app/SELECT_FEATURES'

const setFeatureList = data => ({type: SET_FEATURE_LIST, payload: data})
const onSelectFeature = features => ({type: SELECT_FEATURES, payload: features})

export {
    SET_FEATURE_LIST, setFeatureList,
    SELECT_FEATURES, onSelectFeature
}