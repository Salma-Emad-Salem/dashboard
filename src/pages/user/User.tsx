import Single from '../../components/single/Single'
import { singleUser } from '../../data'



const User = () => {
  return (
    <div className='Singleuser'>
      <Single  {...singleUser}/>
    </div>
  )
}

export default User
