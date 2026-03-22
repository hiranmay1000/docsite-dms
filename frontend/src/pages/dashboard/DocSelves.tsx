import { useState } from "react";
import { Box, Paper } from "@mui/material";
import ToolBar from "../../components/ToolBar";
import Folders from "../../components/Folders";
import Files from "../../components/Files";

const DocSelves = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, bgcolor: "#ffffff00" }}>
        {/* Header */}
        <ToolBar viewMode={viewMode} setViewMode={setViewMode} />

        {/* Folders */}
        <Folders />

        {/* Files */}
        <Files viewMode={viewMode} />
      </Paper>
    </Box>
  );
};

export default DocSelves;
