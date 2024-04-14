import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { UICONFIG } from "../constants/ui-config";

const INFO_ICON_SVG =
  "https://assets.graphic-portal.com/spaces/-Ns4Y6W9ApHcBTBEzu9S/graphics/-NsNham4iKudej0xLINo/versions/-NsNhi7ANB5ZktQHydB2/main/info-button.svg";

export function Footer() {
  return (
    <Stack direction="row" alignItems="center">
      <img src={INFO_ICON_SVG} alt="Info" />
      <Typography variant="body2">{UICONFIG.footerline}</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <img src={UICONFIG.footerlineIcon} alt="Logo" />
    </Stack>
  );
}
