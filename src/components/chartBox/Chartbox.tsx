import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import './chartbox.scss'
import { Link } from 'react-router-dom'

type Props={
    color:string,
    icon:string,
    title:string,
    number:string,
    chartData:object[],
    dataKey:string
    percentage:number
}
const Chartbox = (props:Props) => {


  return (
    <div className='chartbox'>
      <div className="boxInfo">
        <div className="title">
            <img src={props.icon} alt="icon" />
            <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' style={{color:props.color}}>
            View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="charts">
        <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
                <Tooltip
                contentStyle={{background:"transparent", border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10, y:60}}
                />
                <Line
                 type="monotone" 
                 dataKey={props.dataKey}
                  stroke={props.color}
                   strokeWidth={2}
                    dot={false}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="text">
            <span 
            className="percentage"
            style={{color:props.color < " 0 "? "tomato":"limegreen"}}>{props.percentage} %</span>
            <span className="durition">this month</span>
        </div>
      </div>
    </div>
  )
}

export default Chartbox
