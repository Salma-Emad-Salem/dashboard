import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './single.scss'
 type Props={
  id:number;
  img?:string;
  title:string;
  info:Object;
  chart?:{
    dataKeys:{
      name:string ;
       color:string
    }[];
    data:Object[];
  }
  activities?:{time:string ; text:string}[];
};
const Single = (props:Props) => {
  return (
    <div className='single'>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="img" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map(item=>(
            <div className="item" key={item[0]}>
            <span className="title">{item[0]} : </span>
            <span className="value">{item[1]}</span>
            </div>
            ))}

          </div>
        </div>
        <hr />
        {props.chart && <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={props.chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend />
          {props.chart.dataKeys.map(datakey=>(
            <Line type="monotone" dataKey={datakey.name} stroke={datakey.color} />
          ))}
         
          
        </LineChart>
        </ResponsiveContainer>
        </div>}

      </div>
      <div className="activeties">
        <h2>Latest Activites</h2>
       {props.activities &&
        <ul>
        {props.activities.map(activity=>(
            <li key={activity.text}>
            <div className='list'>
              <p> {activity.text}</p>
              <time>{activity.time}</time>
            </div>
          </li>
        ))}
        </ul> }
      </div>
    </div>
  )
}

export default Single
  