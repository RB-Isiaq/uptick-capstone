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
import ApplicantModal from '../Modal/ApplicantModal';
import { ProgramApplicant } from '@/interfaces';

const StyledTableCell = styled(TableCell)(({}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F7F9FF',
    color: '#000',
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

interface RecentTable {
  header?: string[];
  rows: ProgramApplicant[];
}

export default function RecentTable({ header, rows }: RecentTable) {
  const [showDetails, setShowDetails] = React.useState(false);
  const [applicantId, setApplicantId] = React.useState('');

  const getColor = (status: string) => {
    return status.toLowerCase() === 'accepted'
      ? '#50B773'
      : status.toLowerCase() === 'rejected'
      ? '#FF3434'
      : '';
  };

  const showDetailsHandler = (id: string) => {
    setApplicantId(id);
    setShowDetails(true);
  };

  return (
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
          {rows?.map((row) => (
            <StyledTableRow key={row.firstName}>
              <StyledTableCell component="th" scope="row">
                {row.firstName}
              </StyledTableCell>
              <StyledTableCell align="left">Program</StyledTableCell>
              {row.updatedAt && (
                <StyledTableCell align="left">
                  {row.updatedAt.split('T')[0]}
                </StyledTableCell>
              )}
              {row.status && (
                <StyledTableCell
                  align="left"
                  style={{ color: getColor(row.status) }}
                >
                  {row.status}
                </StyledTableCell>
              )}
              <StyledTableCell align="left">
                <button
                  onClick={() => showDetailsHandler(row.programApplicantId)}
                >
                  Details
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ApplicantModal
        isOpen={showDetails}
        onClose={setShowDetails}
        appDetails={rows}
        applicantId={applicantId}
      />
    </TableContainer>
  );
}
