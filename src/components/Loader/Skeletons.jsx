import React from 'react'
import { Box, Skeleton } from '@mui/material'

const Skeletons = () => {
  return (
    <div>
      <Box style={{ "display": "flex", "gap": "4px" }}>
        <Skeleton variant="rounded" width={300} height={40} />
        <Skeleton variant='rounded' width={40} height={40} />
        <Skeleton variant='rounded' width={40} height={40} />
        <Skeleton variant='rounded' width={40} height={40} />
      </Box>
    </div>
  )
}

export default Skeletons
