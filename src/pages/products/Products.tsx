import { useState } from 'react';
import './products.scss'
import Datatable from '../../components/dataTable/Datatable';
import Add from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },

  { field :"img",
  headerName:"Image",
  width:100,
  renderCell:(params)=>{
    return <img src={params.row.img || "/noavatar.png"}
     alt='Image'/>
  }},
  {
    field: 'title',
    headerName: 'Title',
    type:"string",
    width: 250,

  },
  {
    field: 'color',
    headerName: 'Color',
    type:"string",
    width: 150,

  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 200,

  },
  {
    field: 'producer',
    headerName: 'Producer',
    type:"string",
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    type:"string",
    width: 200,

  },
  {
    field: 'inStock',
    headerName: 'In stock',
    type:"boolean",
    width: 150,

  },
];
const Product = () => {
  const [open,setOpen]=useState(false);

  return (
    <div className='Products'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <Datatable slug="products" columns={columns} rows={products}/>
      {open && <Add slug='Products' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Product


