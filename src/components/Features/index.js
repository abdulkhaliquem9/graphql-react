import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import FeatureCard from './../FeatureCard'

function Features(props) {
    let { Features , SelectedFeatures } = props
    let selection = {}
    Object.keys(Features).forEach( feature => {
        if(SelectedFeatures.indexOf(feature) >=0){
            selection[feature] = Features[feature]
        }
    } ) 
    return (
            <Grid container spacing={1}>
                {
                    selection && Object.keys(selection).map((feature, i) => <Grid key={i} item xs={6} sm={3}>
                        <FeatureCard  title={selection[feature].metric} value={selection[feature].value} />
                    </Grid>)
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