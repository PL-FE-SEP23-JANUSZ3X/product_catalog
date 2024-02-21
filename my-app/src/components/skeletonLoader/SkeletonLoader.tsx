import { Box, Grid, Skeleton, Theme, useMediaQuery } from "@mui/material";
import SkeletonLoaderProps from "./SkeletonLoader.types";

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ length, width }) => {
  const isTablet = useMediaQuery((theme: Theme)  => theme.breakpoints.down('md'));
  const isMobile = useMediaQuery((theme: Theme)  => theme.breakpoints.down('sm'));
  
  let skeletonWidth = width.large;
  let skeletonLength = length.large

  if (isMobile) {
    skeletonWidth = width.small;
    skeletonLength = length.small;
  } 

  if (isTablet) {
    skeletonWidth = width.medium;
    skeletonLength = length.medium;
  }

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      {Array.from({ length: skeletonLength }).map((_, index) => (
        <Grid key={index} item>
          <Skeleton variant="rounded" width={skeletonWidth} height={506} />
        </Grid>
      ))}
    </Box>
  );
};

export default SkeletonLoader;
