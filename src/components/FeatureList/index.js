/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useQuery} from 'urql'
import {setFeatureList, onSelectFeature} from '../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const GetFeatures = `
{
    getMetrics
}
`



 function FeatureList(props) {
     const {FeatureList, setFeatureList, onSelectFeature} = props
     console.log('Featurelist..', props)
    const  onChange =  (event, value) => {
        // console.log('onFeatureSelect', value)
        onSelectFeature(value)
    }
  const classes = useStyles();
  const [result] = useQuery({
      query: GetFeatures,
      variables:{}
  })
  const { fetching, data, error } = result;
  console.log('feature list query', result)

  useEffect(()=>{
    setFeatureList(data)
  },[fetching, data])
  if(FeatureList.length === 0) return null
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={FeatureList}
        onChange={onChange}
        getOptionLabel={option => option.title}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="select metric"
            placeholder="metrics"
            fullWidth
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = state =>{
    return{
        FeatureList: state.measurementReducer.FeatureList
    }
}

export default connect(mapStateToProps,{
    setFeatureList,
    onSelectFeature
})(FeatureList)
