'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image, { StaticImageData } from 'next/image';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F7F9FF',
    color: theme.palette.common.black,
    fontFamily: 'Raleway',
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Raleway',
  },
}));

const StyledTableRow = styled(TableRow)(({}) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#F7F9FF',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type ApplicantRows = {
  icon?: string | StaticImageData;
  name: string;
  application: string;
  date?: string;
  status?: string;
  number?: number | string;
  view: string;
};

interface RecentTable {
  header?: string[];
  rows: ApplicantRows[];
}

export default function RecentTable({ header, rows }: RecentTable) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {header && (
          <TableHead>
            <TableRow>
              {header.map((heading) => (
                <StyledTableCell key={heading}>{heading}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
                className="flex items-center gap-[10px]"
              >
                {row.icon && <Image src={row.icon} alt="icon" />}
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.application}</StyledTableCell>
              {row.date && (
                <StyledTableCell align="left">{row.date}</StyledTableCell>
              )}
              {row.status && (
                <StyledTableCell align="left">{row.status}</StyledTableCell>
              )}
              {row.number && (
                <StyledTableCell align="left">{row.number}</StyledTableCell>
              )}
              <StyledTableCell align="left">
                <button>{row.view}</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
