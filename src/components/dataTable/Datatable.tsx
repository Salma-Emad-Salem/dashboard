import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import './datatable.scss'
import { QueryClient, useMutation } from '@tanstack/react-query'

type Props ={
  columns:GridColDef[],
  rows:Object[],
  slug:string

}

const Datatable = (props:Props) => {
  const queryClient= new QueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [`all${props.slug}`]})
      ;
    },
  });
  function handleDelete(id: number) {
    mutation.mutate(id);
  }
  const actionColumn:GridColDef={ 
    field :"actions",headerName:"Actions" ,
    width:150,
    renderCell:(params)=>{
    return <div className="action">
      <Link to={`/${props.slug}/${params.row.id}`}>
        <img src="/view.svg" alt="view" />
      </Link>

      <div className="delete"onClick={()=>handleDelete(params.row.id)} >
        <img src="/delete.svg" alt="delete" />
      </div>
    </div>
  }}

  return (
    <div className='dataTable'>
        <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns ,actionColumn ]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,

              
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={
          {toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500}
          }}
        }
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableColumnResize={true}
        />
      
    </div>
  )
}

export default Datatable
