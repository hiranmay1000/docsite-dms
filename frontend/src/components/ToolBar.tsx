import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Path from "./Path";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";

interface ToolBarTypes {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

const ToolBar = ({ viewMode, setViewMode }: ToolBarTypes) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
      flexWrap="wrap"
      gap={2}
    >
      <Box>
        <Path />
        <Typography variant="h5" fontWeight={700} mt={1}>
          Public Share Library
        </Typography>
        <Typography variant="body2" color="text.secondary">
          64.2 MB · Created By Mahmoud Ali
        </Typography>
      </Box>

      <Box display="flex" gap={1} alignItems="center">
        <TextField
          size="small"
          placeholder="Search files..."
          sx={{ minWidth: 220 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ bgcolor: "#f1f3f5", borderRadius: 2 }}>
          <IconButton
            size="small"
            onClick={() => setViewMode("grid")}
            color={viewMode === "grid" ? "primary" : "default"}
          >
            <GridViewIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => setViewMode("list")}
            color={viewMode === "list" ? "primary" : "default"}
          >
            <ListIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolBar;
