import { Box, Typography, useTheme } from "@mui/material";
import { convertLength } from "@mui/material/styles/cssUtils";

export const Introduction = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ marginBottom: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "400px",
          padding: "20px 40px",
          gap: "40px",
          backgroundImage:
            ' linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url("img/background/violin.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "40px", textAlign: "center", color: theme.palette.colors.textColor }}
          >
            Дмитриева Светлана Станиславовна
          </Typography>
          <Typography sx={{ fontSize: "40px", textAlign: "center", color: theme.palette.colors.textColor }}>
            Скрипичный мастер
          </Typography>

          <Box sx={{ padding: "20px 40px", textAlign: "justify", color: theme.palette.colors.textColor }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed tempore voluptas natus consectetur
            eveniet cupiditate eos? Quam, optio quaerat, cum iusto voluptatem magnam placeat quas dignissimos beatae
            dolores ea deserunt aperiam aliquid molestiae illo eligendi laboriosam, repellendus perferendis odit hic
            sint consectetur earum et magni. Dolorum illo a expedita, quis possimus voluptas quod perspiciatis
            perferendis laudantium fuga quidem tenetur beatae, voluptatibus, iusto sed? Esse reiciendis deserunt iusto
            eius molestiae vitae repellendus dolores ab aut veritatis, error similique veniam voluptatibus sequi tempore
            reprehenderit quidem officia aspernatur porro voluptatem non suscipit tempora ipsam? Error sed enim ratione
            quam, soluta molestias adipisci?
          </Box>
        </Box>

        <Box>
          <Box
            component="img"
            sx={{ position: "relative", height: "100%", top: "67px" }}
            alt="Sveltala photo"
            src="img/sveta.png"
          />
        </Box>
      </Box>
    </Box>
  );
};
