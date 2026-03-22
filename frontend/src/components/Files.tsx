import {
  Box,
  Chip,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import DescriptionIcon from "@mui/icons-material/Description";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getFileColor } from "../util/settings";

type FileItem = {
  name: string;
  type: "pdf" | "doc" | "xls" | "ppt";
  date: string;
};

const files: FileItem[] = [
  { name: "Contracts No. 442", type: "pdf", date: "15 Mar 2024" },
  { name: "Application Terms", type: "doc", date: "3 Hours Ago" },
  { name: "Financial Spread Sheet", type: "xls", date: "Yesterday" },
  { name: "Hilton Hotel", type: "ppt", date: "02 Jun 2024" },
];

const Files = ({ viewMode }: { viewMode: string }) => {
  return (
    <Box>
      <Typography variant="subtitle2" mb={2} color="text.secondary">
        Files
      </Typography>

      {viewMode === "grid" ? (
        <Grid container spacing={2}>
          {files.map((file, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 3,
                  position: "relative",
                  cursor: "pointer",
                  transition: "0.2s",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 140,
                  "&:hover": {
                    boxShadow: 3,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <IconButton
                  size="small"
                  sx={{ position: "absolute", top: 6, right: 6 }}
                >
                  <MoreVertIcon fontSize="small" />
                </IconButton>

                <Box>
                  <DescriptionIcon
                    sx={{
                      fontSize: 42,
                      mb: 1,
                      color: getFileColor(file.type),
                    }}
                  />

                  <Typography
                    fontWeight={600}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {file.name}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={2}
                >
                  <Typography variant="caption" color="text.secondary">
                    {file.date}
                  </Typography>
                  <Chip label={file.type.toUpperCase()} size="small" />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ borderRadius: 3 }}
        >
          <Table size="small">
            <TableHead sx={{ bgcolor: "#f8f9fa" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date Modified</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index} hover>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <DescriptionIcon
                        sx={{ color: getFileColor(file.type) }}
                      />
                      <Typography>{file.name}</Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Chip label={file.type.toUpperCase()} size="small" />
                  </TableCell>

                  <TableCell>
                    <Typography variant="caption" color="text.secondary">
                      {file.date}
                    </Typography>
                  </TableCell>

                  <TableCell align="right">
                    <IconButton size="small">
                      <GridMoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Files;
