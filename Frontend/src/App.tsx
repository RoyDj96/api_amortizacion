import './App.css';
/* import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; */
import axios from 'axios';
import { useState } from 'react';





function App() {
  const [mto, setMto] = useState("");
  const [vint, setVint] = useState("");
  const [npla, setNpla] = useState("");
  //const [data, setData] = useState([]);

  const dataAmort = async () => {
    try {
      await axios.post('http://localhost:3005/api/quota', {
        Mto: mto,
        Vint: vint,
        Npla: npla
      }).then((res) => {
        console.log(res.data)
        //setData(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <h3>Monto</h3>
        <input
          type="text"
          value={mto}
          onChange={(e) => setMto(e.target.value)}
        />
      </div>
      <div>
        <h3>Interés</h3>
        <input
          type="text"
          value={vint}
          onChange={(e) => setVint(e.target.value)}
        />
      </div>
      <div>
        <h3>Meses</h3>
        <input
          type="text"
          value={npla}
          onChange={(e) => setNpla(e.target.value)}
        />
      </div>
      <div>
        <button onClick={dataAmort}>click here</button>
      </div>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mes</TableCell>
              <TableCell align="right">Capital</TableCell>
              <TableCell align="right">Interés</TableCell>
              <TableCell align="right">Saldo final</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell align="right">{row}</TableCell>
                <TableCell align="right">{row}</TableCell>
                <TableCell align="right">{row}</TableCell>
                <TableCell align="right">{row}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  )
}

export default App
