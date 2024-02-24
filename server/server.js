import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors"; // Импортируем пакет cors
import dotenv from "dotenv";
dotenv.config();

const app = express();
// const PORT = 3001;

app.use(cors()); // Добавляем cors middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Настройте транспорт для отправки почты
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru", // SMTP-сервер почтового сервиса bk.ru
    port: 465, // Порт SMTP-сервера
    secure: true, // Использовать SSL
    auth: {
      user: process.env.EMAIL_ADDRESS, // Ваш электронный адрес Gmail
      pass: process.env.EMAIL_PASSWORD, // Пароль от вашего почтового ящика
    },
  });

  // Настройте содержимое письма
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS, // Получатель
    subject: "New Message from Contact Form", // Тема письма
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `, // Текст письма
  };

  try {
    // Отправляем письмо
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email Sent Successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
