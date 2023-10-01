import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

console.log("Email:", process.env.EMAIL);
console.log("Password:", process.env.PASSWORD ? "********" : "Not Set"); // to keep it hidden
console.log("Destination Email:", process.env.DESTINATION_EMAIL);

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/sendmail', async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Received a request to /sendmail"); // add this line
    // ... rest of the code

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.DESTINATION_EMAIL,
        subject: `Message from ${name}`,
        text: `From: ${email}\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Success');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
