
import { Button, Pagination, TableCell } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableBody } from "@mui/material";
function FetchAPI() {
  const [posts, setPosts] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const baseURL = "https://6361de747521369cd05fb57b.mockapi.io/players";
  const fetchAPI = () => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP status: ${response.status}')
        }
        return response.json()
      })
      // .then(data => setAPIData(data))
      .then((json) => {
        console.log(json);
        setAPIData(json);
      })
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className='mx-auto flex flex-col'>
      {/* <Button onClick={fetchAPI} >
        FetchAPI
      </Button> */}
      <div>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                {/* <TableCell>TEST</TableCell> */}
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">COST</TableCell>
                <TableCell align="center">CLUB</TableCell>
                <TableCell align="center">NATION</TableCell>
                <TableCell align="center">INFORMATION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {APIData.map(items =>
                <TableRow>
                  <TableCell scope='row' align='center'>
                    {items.id}
                  </TableCell>
                  <TableCell align='center'>
                    {items.name}
                  </TableCell>
                  <TableCell align='center'>
                    ${items.cost.toFixed(0)}
                  </TableCell>
                  <TableCell align='center'>
                    {items.club}
                  </TableCell>
                  <TableCell align='center'>
                    {items.nation}
                  </TableCell>
                  <TableCell align='center'>
                    {items.info}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='mx-auto pt-5'>
        {/* <Pagination count={5}></Pagination> */}
      </div>
      <footer className='h-20'>laskjd</footer>
    </div>
  )
}



export default FetchAPI