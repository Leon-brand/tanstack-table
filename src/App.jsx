import dayjs from 'dayjs';
//import data from './MOCK_DATA.json';
import data from './SDI121109B14_2024_12.json';
import SimpleTable from './components/SimpleTable';
  
function App() {

  const columns = [
    {
      header: 'UUID',
      accessorKey: 'UUID',
      footer: 'UUID'
    },
    {
      header: 'FECHA EMISION',
      accessorKey: 'FECHA_EMISION',
      footer: 'FECHA EMISION',
      cell: info => dayjs(info.getValue()).format('DD/MM/YYYY')
    }, 
    {
      header: 'RFC EMISOR',
      accessorKey: 'RFC_EMISOR',
      footer: 'RFC_EMISOR'
    }, 
    {
      header: 'NAME EMISOR',
      accessorKey: 'NAME_EMISOR',
      footer: 'NAME EMISOR'
    },
    {
      header: 'RFC RECEPTOR',
      accessorKey: 'RFC_RECEPTOR',
      footer: 'RFC RECEPTOR'
    },
    {
      header: 'NAME RECEPTOR',
      accessorKey: 'NAME_RECEPTOR',
      footer: 'NAME_RECEPTOR'
    },
    {
      header: 'FECHA CERT SAT',
      accessorKey: 'FECHA_CERT_SAT',
      footer: 'FECHA CERT SAT',
      cell: info => dayjs(info.getValue()).format('DD/MM/YYYY')
    },  
    {
      header: 'VERSION',
      accessorKey: 'VERSION',
      footer: 'VERSION'
    },
    {
      header: 'TIPO COMPROBANTE',
      accessorKey: 'TIPO_COMPROBANTE',
      footer: 'TIPO COMPROBANTE'
    },
    {
      header: 'SERIE',
      accessorKey: 'SERIE',
      footer: 'SERIE'
    },
    {
      header: 'FOLIO',
      accessorKey: 'FOLIO',
      footer: 'FOLIO'
    },
    {
      header: 'LUGAR EXPEDICION',
      accessorKey: 'LUGAR_EXPEDICION',
      footer: 'LUGAR EXPEDICION'
    },
    {
      header: 'METODO PAGO',
      accessorKey: 'METODO_PAGO',
      footer: 'METODO PAGO'
    },
    {
      header: 'FORMA PAGO',
      accessorKey: 'FORMA_PAGO',
      footer: 'FORMA PAGO'
    },
    {
      header: 'CONDICIONES PAGO',
      accessorKey: 'CONDICIONES_PAGO',
      footer: 'CONDICIONES PAGO'
    }
  ]

  return (
    <div>
     <SimpleTable data={data} columns={columns}></SimpleTable>
    </div>
  )
}

export default App
