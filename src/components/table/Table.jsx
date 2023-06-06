import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {

    const rows = [
      {
        id: 123,
        product: "A",
        img: "https://media.istockphoto.com/id/684062636/photo/hand-writing-inscription-free-sample-with-marker-concept.jpg?s=612x612&w=0&k=20&c=4DIoRyju5Xe1GglZZZuTShtUAmOLotD6suo_F6MLyLo=",
        customer: "Asela",
        date: "1 March",
        amount: 758,
        method: "Cash on Delievery",
        status: "Approved",
      },
      {
        id: 124,
        product: "A",
        img: "https://media.istockphoto.com/id/684062636/photo/hand-writing-inscription-free-sample-with-marker-concept.jpg?s=612x612&w=0&k=20&c=4DIoRyju5Xe1GglZZZuTShtUAmOLotD6suo_F6MLyLo=",
        customer: "Asela",
        date: "1 March",
        amount: 758,
        method: "Cash on Delievery",
        status: "Approved",
      },
      {
        id: 125,
        product: "A",
        img: "https://media.istockphoto.com/id/684062636/photo/hand-writing-inscription-free-sample-with-marker-concept.jpg?s=612x612&w=0&k=20&c=4DIoRyju5Xe1GglZZZuTShtUAmOLotD6suo_F6MLyLo=",
        customer: "Asela",
        date: "1 March",
        amount: 758,
        method: "Cash on Delievery",
        status: "Pending",
      },
    ];




      
          return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                  </div></TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={'status ${row.status}'}>{row.status}</span>
                </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List