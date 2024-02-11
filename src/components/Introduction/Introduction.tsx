import styles from "./Introduction.module.scss";
import { Box, Typography, useTheme } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

export const Introduction = () => {
  const theme = useTheme();
  return (
    <Box component="section">
      <Box className="container wrapper">
        <Grid container spacing={2}>
          <Grid zero={12} tablet={8}>
            <Box>
              <Typography variant="h1" sx={{ fontSize: "40px", textAlign: "center" }}>
                Дмитриева Светлана Станиславовна
              </Typography>
              <Typography sx={{ fontSize: "40px", textAlign: "center" }}>Скрипичный мастер</Typography>

              <Box sx={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed tempore voluptas natus consectetur
                eveniet cupiditate eos? Quam, optio quaerat, cum iusto voluptatem magnam placeat quas dignissimos beatae
                dolores ea deserunt aperiam aliquid molestiae illo eligendi laboriosam, repellendus perferendis odit hic
                sint consectetur earum et magni. Dolorum illo a expedita, quis possimus voluptas quod perspiciatis
                perferendis laudantium fuga quidem tenetur beatae, voluptatibus, iusto sed? Esse reiciendis deserunt
                iusto eius molestiae vitae repellendus dolores ab aut veritatis, error similique veniam voluptatibus
                sequi tempore reprehenderit quidem officia aspernatur porro voluptatem non suscipit tempora ipsam? Error
                sed enim ratione quam, soluta molestias adipisci?
              </Box>
            </Box>
          </Grid>
          <Grid zero={12} tablet={4}>
            <Box sx={{ position: "relative", height: "400px" }}>
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  height: "100%",
                  top: "36px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                alt="Sveltala photo"
                src="img/sveta.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
