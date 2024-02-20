import { Box, Grid, Skeleton, Theme, useMediaQuery } from "@mui/material";

const SkeletonLoader = () => {
  const isTablet = useMediaQuery((theme: Theme)  => theme.breakpoints.down('md'));
  const isMobile = useMediaQuery((theme: Theme)  => theme.breakpoints.down('sm'));
  
  let numberOfSkeletons = 4;
  let skeletonWidth = 272;

  if (isMobile) {
    numberOfSkeletons = 1;
    skeletonWidth = 288;
  } else if (isTablet) {
    numberOfSkeletons = 2;
    skeletonWidth = 288;
  }

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <Grid key={index} item>
          <Skeleton variant="rounded" width={skeletonWidth} height={506} />
        </Grid>
      ))}
    </Box>
  );
};

export default SkeletonLoader;
