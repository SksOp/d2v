import { Box, Stack } from "@mui/material";
import { SxProps } from "@mui/system";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({
  sx,
  children,
}: {
  sx?: SxProps;
  children: React.ReactNode;
}) {
  return (
    <Stack
      sx={{
        maxWidth: "1000px",
        width: "100%",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Navbar />
      <Box
        component={"main"}
        sx={{
          width: "100%",
          ...sx,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
