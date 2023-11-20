import React from "react";
import { Textarea } from "@mui/joy";
import "@fontsource/inter";
import Box from "@mui/joy/Box";
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send";

export default function Area() {
  return (
    <Box
      m={1}
      display={"flex"}
      flexDirection={"column"} // Stack child elements vertically
      alignItems={"center"}
      sx={{
        py: 2,
        mt: 26,
        p: 1,
      }}
    >
      <Textarea
        sx={{ borderRadius: 23, width: "40%", marginLeft: "auto", marginRight: "auto" }}
        color="neutral"
        minrows={2}
        mincols={1}
        size="sm"
        variant="soft"
        placeholder="Type in here…"
      />
      <Button sx={{ mt: 2 }} size="small" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
}
