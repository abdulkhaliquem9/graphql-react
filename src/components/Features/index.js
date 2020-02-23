import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import FeatureCard from './../FeatureCard'

function Features(props) {
    let { Features = {} , SelectedFeatures = [] } = props
    let selection = {}

    console.log('Features props ------',selection, '_+_+_+++', props, '...')
    return (
            <Grid container spacing={1}>
                {
                  SelectedFeatures.map( (feature,i) => <FeatureCard key={i} title={SelectedFeatures} value={"0.0"}/>)
                }
            </Grid>
    )
}

const mapStateToProps = state => {
    return {
        Features: state.measurementReducer.Features,
        SelectedFeatures: state.measurementReducer.SelectedFeatures
    }
}

export default connect(mapStateToProps)(Features)