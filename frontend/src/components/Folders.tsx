import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const folders = [
  { folderid: "123", name: "Contract Versions", files: 3 },
  { folderid: "124", name: "Big Kahuna (1)", files: 17 },
  { folderid: "125", name: "Biffco Enterprise corp.", files: 6 },
  { folderid: "126", name: "Abstergo Ltd.", files: 21 },
];

const Folders = () => {
  const handleFolderDoubleClick = () => {
    console.log("double click is happening");
  };

  return (
    <Box>
      <Typography variant="subtitle2" mb={2} color="text.secondary">
        Folders
      </Typography>

      <Grid container spacing={2} mb={4}>
        {folders.map((folder, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              variant="outlined"
              onDoubleClick={handleFolderDoubleClick}
              sx={{
                height: 160,
                borderRadius: 3,
                cursor: "pointer",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  boxShadow: 4,
                  transform: "translateY(-3px)",
                  borderColor: "primary.main",
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 2,
                  "&:last-child": { pb: 2 },
                }}
              >
                <FolderIcon sx={{ fontSize: 70, color: "#5c6bc0", mb: 1 }} />

                <Typography
                  fontWeight={600}
                  title={folder.name}
                  sx={{
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {folder.name}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {folder.files} Files
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Folders;
