import './topbox.scss'
import { topDealUsers } from '../../data'

const Topbox = () => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
        <div className="list">
        {topDealUsers.map(users=>(
            <div key={users.id} className='listItem' >
              <div className="user">
                <img src={users.img} alt="user" />
                <div className="userText">
                    <span className='userName'>{users.username}</span>
                    <span className='email'>{users.email}</span>
                </div>
              </div>
              <span className="amount">${users.amount}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Topbox
