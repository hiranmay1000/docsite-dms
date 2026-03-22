import { Box, Stack } from "@mui/material";
import DocSelves from "./DocSelves";
import UploadSection from "./UploadSection";
import ShareSection from "./ShareSection";

const DocContainer = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack direction="row" gap={2} width="90%">
        <Box flex={3}>
          <DocSelves />
        </Box>

        <Box flex={2}>
          <UploadSection />
          <ShareSection />
        </Box>
      </Stack>
    </Box>
  );
};

export default DocContainer;
