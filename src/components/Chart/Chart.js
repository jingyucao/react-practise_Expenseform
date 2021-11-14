import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //console.log(dataPointValues);
  // here return an Array of Numbers

  const totalMaximum = Math.max(...dataPointValues);
  //...is spread operator to pull out all the array elements and add them as stand alone arguments to max method

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint =>
        <ChartBar keys={dataPoint.label} value={dataPoint.value} max={totalMaximum} label={dataPoint.label}/>
      )}
    </div>
  )
}

export default Chart;
