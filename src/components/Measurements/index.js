import React, {useEffect, useState} from 'react';
import {useSubscription} from 'urql'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {connect} from 'react-redux'
import {setData}  from '../../actions'

const getMeasurementsQuery =  `
subscription{
  newMeasurement{
    metric
    value
    at
    unit
  }
}  
`

function App(props) {
  // const name = 'usesubscription-example'
  const colors = ['red', 'green', 'blue', 'purple', 'dodgerblue', 'tomato']
  const graphLines =  [
    "waterTemp",
    "casingPressure",
    "injValveOpen",
    "flareTemp",
    "oilTemp",
    "tubingPressure"
  ]
  const { SelectedFeatures, parsedData,  setData} = props
  const [count, setCount] =useState(0)
  const [result] = useSubscription({
    query: getMeasurementsQuery,
    variables:{}
  })
//   console.log('result', props)
  const { fetching, data, error } = result;
  
  useEffect(()=>{
    // console.log('...useEffect', count)
    setCount(count+1)
    setData(data)
  },[data, error])
  
  // if (fetching) return <LinearProgress />;

  if(error){
    return error.getMessage()
  }
  
  if(result.data === undefined){
    return <div>No Data</div>
  }
  return (
    <div>
      {
       SelectedFeatures.length > 0 && <LineChart
        width={800}
        height={500}
        data={parsedData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          SelectedFeatures.map( (line, i) => <Line key={i} type="linear" dataKey={line} stroke={colors[i]} />)
        }
      </LineChart>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return{
    parsedData: state.measurementReducer.parsedData,
    SelectedFeatures: state.measurementReducer.SelectedFeatures
  }
}

export default connect(mapStateToProps,{
  setData
})(App);
