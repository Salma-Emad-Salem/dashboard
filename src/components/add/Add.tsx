import { GridColDef } from '@mui/x-data-grid'
import './add.scss'
import { QueryClient, useMutation } from '@tanstack/react-query'

type Props={
    slug:string,
    columns:GridColDef[],
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const Add = (props:Props) => {
  const queryClient= new QueryClient();
  const mutation = useMutation({
    mutationFn:()=>{
      return fetch(`http://localhost:8800/api/${props.slug}s`,{
        method :"post",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          id:111,
          img:"",
          lastName:"emad",
          firstName:"salma",
          email:"salma@salma.com",
          phone:"123 456 789" ,
          createdAt:"05.15.2024",
          verified:true,
        })

      })
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: [`all${props.slug}s`]}) 
      //slug = user in this case 
    }
  });

    const handleSubmit=(e: { preventDefault: () => void })=>{
      e.preventDefault();
      mutation.mutate()
      props.setOpen(false)

    }
  return (
    <div className='AddUser'>
      <div className="model">
        <span className="close" onClick={()=>props.setOpen(false)} >X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit} >
            {props.columns
            .filter((item)=>item.field !== "id" && item.field !=="img")
                .map(columns=>(
                    <div className="item">
                        <label>{columns.headerName}</label>
                        <input type={columns.type} placeholder={columns.field} />
                    </div>

                    
                ))}
            <button type='submit'>Send</button>   
        </form>

      </div>
    </div>
  )
}

export default Add
