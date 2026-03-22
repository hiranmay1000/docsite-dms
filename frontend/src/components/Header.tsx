import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #eee",
        color: "black",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT: Branding */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton>
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              letterSpacing: 0.5,
            }}
          >
            Docsite
          </Typography>
        </Box>

        {/* CENTER: Search */}
        <Box sx={{ flex: 1, maxWidth: 500, mx: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search documents..."
            sx={{
              bgcolor: "#f5f7fa",
              borderRadius: 2,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* RIGHT: Actions + Profile */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton onClick={handleOpen}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#5c6bc0",
                fontSize: 14,
              }}
            >
              H
            </Avatar>
          </IconButton>

          {/* Profile Dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
