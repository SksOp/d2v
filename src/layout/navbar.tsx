import { Box, Stack, Typography } from "@mui/material";
import { UICONFIG } from "../constants/ui-config";

export function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        p: 3,
        py: 3.3,
        borderBottom: 1,
        borderColor: "rgba(0, 0, 0,0.05)",
      }}
      width="100%"
      justifyContent="flex-start"
    >
      <Typography
        variant="h2"
        fontWeight={500}
        fontSize={"1.5rem"}
        lineHeight="1.5rem"
      >
        <Box
          component="img"
          sx={{
            width: "40px",
            height: "auto",
            mr: 2,
          }}
          src={UICONFIG.headlineIcon}
          alt={UICONFIG.headline}
        />
        {UICONFIG.headline}
      </Typography>
    </Stack>
  );
}
