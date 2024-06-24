import { GridColDef } from '@mui/x-data-grid';
import Datatable from '../../components/dataTable/Datatable'
import { useState } from 'react';
import './users.scss'
import Add from '../../components/add/Add';
import { useQuery } from '@tanstack/react-query';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field :"img",headerName:"Avatar" ,width:100,
  renderCell:(params)=>{
    return <img src={params.row.img || "/noavatar.png"} alt='avatar'/>
  }},
  {
    field: 'firstName',
    headerName: 'First name',
    type:"string",
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    type:"string",
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type:"string",
    width: 110,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    type:"string",
    width: 110,
    editable: false,
  },
  {
    field :"verified",headerName:"Verified" ,width:100, type:"boolean"
  },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];
const User = () => {
  const [open,setOpen]=useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('http://localhost:8800/api/users').then((res) =>
        res.json(),
      ),
  })
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
   
      {isLoading ?("Loading..."):(<Datatable slug="users" columns={columns} rows={data}/>)}
      {open && <Add slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default User


