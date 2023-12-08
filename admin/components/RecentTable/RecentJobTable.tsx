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
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/Services/ApiCalls';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
  firstName: string;
  application: string;
  jobId?: string;
  icon?: string | StaticImageData;
};

interface RecentTable {
  header?: string[];
  rows: ApplicantRows[];
}

export function RecentJobTable({ header, rows }: RecentTable) {
  const { isLoading, data } = useQuery({
    queryKey: [rows],
    queryFn: async () => {
      if (!rows) {
        return [];
      }
      const request1 = rows.map((row) => {
        return getData(`jobs/${row.jobId}`);
      });
      const request2 = rows.map((row) => {
        return getData(`jobs/${row.jobId}/applications`);
      });

      const response1 = await Promise.all(request1);
      const response2 = await Promise.all(request2);
      return [response1, response2];
    },
  });

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
          {isLoading ? (
            <StyledTableRow>
              <StyledTableCell colSpan={header?.length || 0} align="center">
                Loading...
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            rows &&
            rows.map((row, i) => (
              <StyledTableRow key={row.firstName}>
                <StyledTableCell component="th" scope="row">
                  <Image
                    src={data && data[0][i]?.companyLogo}
                    alt="icon"
                    width={30}
                    height={30}
                    className="inline mr-3"
                  />
                  {data && data[0][i]?.companyName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {data && data[0][i]?.jobTitle}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {data && data[1][i]?.paging?.total}
                </StyledTableCell>

                <StyledTableCell align="left">
                  {data && (
                    <Link
                      href={`/jobs/${data[0][i]?.jobId}?title=${data[0][i]?.jobTitle}`}
                    >
                      Details
                    </Link>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
