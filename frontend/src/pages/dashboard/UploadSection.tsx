import { Box, Paper, Typography, Button, LinearProgress } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadSection = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        my: 2,
      }}
    >
      <Typography fontWeight={600} mb={2}>
        Upload File
      </Typography>

      <Box
        sx={{
          border: "2px dashed #ccc",
          borderRadius: 3,
          textAlign: "center",
          p: 4,
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 40, color: "#4f7cff" }} />

        <Typography mt={2}>Drag your files here</Typography>
        <Typography variant="caption" color="text.secondary">
          DOC, PDF, XLSX, PPT (max 50MB)
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          Browse Files
        </Button>
      </Box>

      {/* Uploaded Files */}
      <Box mt={3}>
        <Typography variant="body2">Sales proposal.doc</Typography>
        <LinearProgress variant="determinate" value={68} sx={{ my: 1 }} />

        <Typography variant="body2">Contracts 742.pdf</Typography>
        <Typography variant="body2">Financial spread sheet.xls</Typography>
      </Box>
    </Paper>
  );
};

export default UploadSection;
