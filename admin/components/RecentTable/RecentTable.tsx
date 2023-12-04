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
// import ApplicantModal from '../Modal/ApplicantModal';
// import { ProgramApplicant } from '@/interfaces';
// import { seApplicants } from '@/sections/programspage/tech/constants';

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
    backgroundColor: '#F9F9F9',
    borderBottom: '1px solid #F1F1F1',
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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
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
                <StyledTableCell component="th" scope="row">
                  {row.icon && (
                    <Image src={row.icon} alt="icon" className="inline mr-3" />
                  )}
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.application}
                </StyledTableCell>
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
      {/* <ApplicantModal
        isOpen={showDetails}
        onClose={setShowDetails}
        applicantId={applicantId}
        appDetails={seApplicants}
      /> */}
    </>
  );
}
