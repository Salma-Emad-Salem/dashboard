import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './bigChart.scss'
const data = [
    {
      name: 'Wed',
      books: 2780,
      clothes: 3700,
      electronic: 2000,
    },
    {
        name: 'Thu',
        books: 1890,
        clothes: 4000,
        electronic: 2181,
    },
    {
        name: 'Fri',
        books: 2390,
        clothes: 3800,
        electronic: 2500,
    },
    {
        name: 'Sat',
        books: 3490,
        clothes: 4300,
        electronic: 2100,
    }

  ];
const Bigchart = () => {
  return (
    <div className='bigChart'>
      <h1>Revenue Analytics</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Bigchart
