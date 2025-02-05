/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { 
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { useState } from 'react';
import '../App.css';

function SimpleTable( { data, columns } ) {

  const [sorting, setSorting] = useState([]);
  const [ globalFilter, setGlobalFilter ] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 15, //default page size
  });


  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      globalFilter,
      pagination
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter
  })

  return (
    <div>
      <input 
        type='text'
        value={globalFilter} 
        onChange={e => setGlobalFilter(e.target.value)} 
        placeholder='Buscar'
        ></input><BsSearch style={{ height: '20px', width: '45px' }} />
      <div className='table-wrapper'>
        <div className='table-container'>
          <table>
            <thead>
              {
                table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {
                      headerGroup.headers.map(header => (
                        <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                          {header.column.columnDef.header.charAt(0).toUpperCase() +
                           header.column.columnDef.header.slice(1).toLowerCase()}
                          {
                            {
                              asc: ' 🔼',
                              desc: ' 🔽'
                            }[header.column.getIsSorted() ?? null]
                          }
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            <tbody>
              {
                table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {
                      row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
            <tfoot>
              {
                table.getFooterGroups().map(footerGroup => (
                  <tr key={footerGroup.id}>
                    {
                      footerGroup.headers.map(footer => (
                        <th key={footer.id}>
                          {footer.column.columnDef.footer.charAt(0).toUpperCase() +
                           footer.column.columnDef.footer.slice(1).toLowerCase()}
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </tfoot>
          </table>
        </div>
      </div>
      <div style={{ marginTop: '2rem'}}>
        <button onClick={() => table.setPageIndex(0)}>Primer pagina</button>
        <button onClick={() => table.previousPage()}>Pagina anterior</button>
        <button onClick={() => table.nextPage()}>Pagina siguiente</button>
        <button onClick={() => table.setPageIndex(table.getPageCount()-1)}>Ultima pagina</button>
        <p>Total de registros: {table.getCoreRowModel().rows.length}</p>
      </div>    
    </div>
  )
}

export default SimpleTable