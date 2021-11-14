import './ChartBar.css';

const Chartbar = (props) => {

  let barFillHeight = "0%";
  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
        {/*style的value是object*/}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default Chartbar
