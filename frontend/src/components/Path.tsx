import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Path = () => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link underline="hover" color="inherit" href="#">
        Files
      </Link>
      <Typography color="text.primary">Public Share Library</Typography>
    </Breadcrumbs>
  );
};

export default Path;
