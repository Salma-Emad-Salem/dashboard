import { Bar, ResponsiveContainer , BarChart, Tooltip } from "recharts"
import "./barchartbox.scss"

type Props={
    color:string,
    title:string,
    chartData:object[],
    dataKey:string
}

const Barchart = (props:Props) => {
  return (
    <div className='barcharts'>
      <h1>{props.title}</h1>
      <div className="charts">
        <ResponsiveContainer width="99%" height={150}>
            <BarChart  data={props.chartData}>
                <Tooltip
                contentStyle={{background:"#2a3447" , borderRadius:"5px"}}
                labelStyle={{display:"none"}}
                cursor={{fill:"none"}}
                />
            <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Barchart
