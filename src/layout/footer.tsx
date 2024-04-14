import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { UICONFIG } from "../constants/ui-config";

const INFO_ICON_SVG =
  "https://assets.graphic-portal.com/spaces/-Ns4Y6W9ApHcBTBEzu9S/graphics/-NsNham4iKudej0xLINo/versions/-NsNhi7ANB5ZktQHydB2/main/info-button.svg";

export function Footer() {
  return (
    <Stack direction="row" alignItems="center" width="100%" px={2.2} gap={1}>
      <Box
        component="img"
        width={16}
        height={16}
        src={INFO_ICON_SVG}
        alt="Info"
        bgcolor="black"
        borderRadius={999}
      />
      <Typography variant="body2" fontSize="0.82rem">
        {UICONFIG.footerline}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      {/* <img src={UICONFIG.footerlineIcon} alt="Logo" /> */}
      <Box
        component="img"
        src={UICONFIG.footerlineIcon}
        alt="Logo"
        width={54}
      />
    </Stack>
  );
}
