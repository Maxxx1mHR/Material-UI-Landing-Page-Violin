import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { SharedStyles } from "@utils/SharedStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contacts = () => {
  const {
    data: {
      contacts: { header, subheader, subheader_text },
    },
  } = useContext(DataContext);
  return (
    <Box>
      <Typography variant="h1" sx={SharedStyles.typography.header}>
        {header}
      </Typography>

      <Grid container>
        <Grid mobile={12} laptop={4} sx={{ display: { mobile: "none", laptop: "flex", alignItems: "flex-end" } }}>
          <Box component="img" src="img/sveta_contacts2.png" sx={{ height: "400px" }} />
        </Grid>
        <Grid mobile={12} laptop={8}>
          <Typography variant="subtitle1" sx={SharedStyles.typography.subheader}>
            {subheader}
          </Typography>
          <Typography variant="subtitle1" sx={SharedStyles.typography.subheader}>
            {subheader_text}
          </Typography>
          <Box sx={{ listStyleType: "none" }}>
            <Box component="a" href="" sx={{ marginRight: "20px" }}>
              <FacebookIcon sx={{ color: "red" }} />
            </Box>
            <Box component="a" href="" sx={{ marginRight: "20px" }}>
              <InstagramIcon sx={{ color: "pink" }} />
            </Box>
            <Box component="a" href="" sx={{ marginRight: "20px" }}>
              <TelegramIcon sx={{ color: "blue" }} />
            </Box>
          </Box>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};
