import { createTransport } from "nodemailer";
import { MAIL_USER, MAIL_PASS } from "../config";
import hbs, {
  NodemailerExpressHandlebarsOptions,
} from "nodemailer-express-handlebars";
import path from "path";

const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

const hbsOptions: NodemailerExpressHandlebarsOptions = {
  viewEngine: {
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, "../views"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(hbsOptions));

export function activationMailHandler(
  recipient: string,
  defaultPassword: string
) {
  const mailOptions = {
    from: "temporarytestmail2024@gmail.com",
    to: recipient,
    subject: "Rosstech account activation",
    template: "mailTemp",
    context: {
      email: recipient,
      defaultPassword: defaultPassword,
      activationLink: `https://rosstech-frontend.vercel.app/activateaccount?email=${recipient}`,
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
