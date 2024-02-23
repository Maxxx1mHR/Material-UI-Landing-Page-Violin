import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreement: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === "agreement" ? checked : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
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
    // fetch("http://localhost:3001/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "John",
    //     email: "test@mail.ru",
    //     message: "Hello, this is a test message",
    //   }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log("Email sent successfully");
    //     } else {
    //       console.error("Failed to send email");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error sending email:", error);
    //   });
  };

  return (
    <form action="/send-email" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid mobile={12} tablet={6}>
          <TextField required label="Имя" name="name" value={formData.name} onChange={handleChange} fullWidth />
        </Grid>
        <Grid mobile={12} tablet={6}>
          <TextField
            required
            fullWidth
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid mobile={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Сообщение"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid mobile={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="agreement" checked={formData.agreement} onChange={handleChange} />}
            label="Я согласен с условиями обработки персональных данных"
          />
        </Grid>
        <Grid mobile={12}>
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
