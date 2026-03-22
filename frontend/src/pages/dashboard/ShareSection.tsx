import {
  Box,
  Paper,
  Typography,
  Avatar,
  Stack,
  TextField,
} from "@mui/material";

const users = [
  { name: "Asmaa Kassim", role: "file owner" },
  { name: "Abeer Abdullah", role: "can edit" },
  { name: "Ebrahim Ali", role: "can view" },
];

const ShareSection = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography fontWeight={600} mb={2}>
        Share "Financial Spread Sheet.xls"
      </Typography>

      <TextField
        fullWidth
        placeholder="Add name, group or email"
        size="small"
        sx={{ mb: 2 }}
      />

      <Stack spacing={2}>
        {users.map((user, index) => (
          <Box key={index} display="flex" alignItems="center" gap={2}>
            <Avatar>{user.name[0]}</Avatar>
            <Box>
              <Typography>{user.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {user.role}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default ShareSection;
