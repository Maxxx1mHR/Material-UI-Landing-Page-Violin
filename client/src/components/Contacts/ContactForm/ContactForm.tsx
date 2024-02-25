import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreement: false,
  });

  const [formDataError, setFormDataError] = useState({
    name: false,
    email: false,
    message: false,
    agreement: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFormData({
      ...formData,
      [name]: name === "agreement" ? checked : value,
    });
  };

  const lettersRegex = /[a-zA-Zа-яА-Я]/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormDataError({
      name: false,
      email: false,
      message: false,
      agreement: false,
    });

    if (formData.name.trim() === "" || !lettersRegex.test(formData.name) || formData.name.length < 3) {
      setFormDataError((prevState) => ({
        ...prevState,
        name: true,
      }));
      return;
    }
    if (formData.email.trim() === "" || !emailRegex.test(formData.email)) {
      setFormDataError((prevState) => ({
        ...prevState,
        email: true,
      }));
      return;
    }
    if (formData.message.trim() === "" || formData.message.length < 10) {
      setFormDataError((prevState) => ({
        ...prevState,
        message: true,
      }));
      return;
    }
    if (!formData.agreement) {
      setFormDataError((prevState) => ({
        ...prevState,
        agreement: true,
      }));
      return;
    }

    console.log("123");

    // http://localhost:3001/send-email
    try {
      const response = await fetch("https://violin-server.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form noValidate action="/send-email" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid mobile={12} tablet={6} sx={{ position: "relative", paddingBottom: "30px" }}>
          <TextField
            label="Имя"
            name="name"
            value={
              formData.name.split("").splice(0, 1).join("").toUpperCase() +
              formData.name.split("").splice(1).join("").toLocaleLowerCase()
            }
            autoComplete="off"
            onChange={handleChange}
            fullWidth
            error={formDataError.name}
          />
          {formDataError.name && <Box sx={{ position: "absolute", color: "red" }}>Error</Box>}
        </Grid>
        <Grid mobile={12} tablet={6} sx={{ position: "relative", paddingBottom: "30px" }}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            value={formData.email.toLocaleLowerCase()}
            autoComplete="off"
            onChange={handleChange}
            error={formDataError.email}
          />
          {formDataError.email && <Box sx={{ position: "absolute", color: "red" }}>Error</Box>}
        </Grid>
        <Grid mobile={12} sx={{ position: "relative", paddingBottom: "30px" }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Сообщение"
            name="message"
            value={
              formData.message.split("").splice(0, 1).join("").toUpperCase() +
              formData.message.split("").splice(1).join("")
            }
            onChange={handleChange}
            error={formDataError.message}
          />
          {formDataError.message && <Box sx={{ position: "absolute", color: "red" }}>Error</Box>}
        </Grid>
        <Grid mobile={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                sx={{
                  color: formDataError.agreement ? "red" : "rgb(255,129,0)",
                  "&:hover": {
                    backgroundColor: formDataError.agreement ? "rgb(255,0,0,0.1)" : "rgba(255,129,0,0.1)",
                  },
                  "&.Mui-checked": {
                    color: "rgb(255, 129, 0)",
                  },
                }}
              />
            }
            label={
              <Box>
                Я согласен(а) с{" "}
                <a href="/policy.html" target="_blank" rel="noopener noreferrer">
                  политикой конфиденциальности
                </a>
              </Box>
            }
          />
        </Grid>
        <Grid mobile={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{ background: "rgba(255,129,0, 0.8)", "&:hover": { background: "rgb(255,129,0)" } }}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
