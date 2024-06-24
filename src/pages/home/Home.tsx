import BarChart from '../../components/barchartbox/BarChart'
import Bigchart from '../../components/bigChartBox/Bigchart'
import Chartbox from '../../components/chartBox/Chartbox'
import Piechart from '../../components/pieChartBox/Piechart'
import Topbox from '../../components/topBox/Topbox'
import {barChartBoxVisit, barChartBoxRevenue ,chartBoxUser, chartBoxProduct,chartBoxRevenue,chartBoxConversion} from '../../data'
import './home.scss'



const Home = () => {
  return (
    <div className='home'>
        <div className="box box1">
          <Topbox/>

        </div>
        <div className="box box2"><Chartbox {...chartBoxUser}/></div>
        <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
        <div className="box box4"><Piechart/></div>
        <div className="box box5"><Chartbox {...chartBoxRevenue}/></div>
        <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
        <div className="box box7"><Bigchart/></div>
        <div className="box box8"><BarChart  {...barChartBoxVisit} /></div>
        <div className="box box9"><BarChart {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home


