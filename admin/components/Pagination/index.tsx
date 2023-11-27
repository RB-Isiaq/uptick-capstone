import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={page}
        shape="rounded"
        color="primary"
        onChange={(_, p) => setPage(p)}
      />
    </Stack>
  );
}
