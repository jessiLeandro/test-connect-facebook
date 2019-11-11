const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const passport = require("passport");
const winston = require("winston");

const app = Express();

app.use(morgan("dev"));
app.use(cors());
app.use(Express.static("public"));
app.use(bodyParser.json());

const config = require("./config");
const auth = require("./auth");
auth(passport);

const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: "559462457958977",
      clientSecret: "dd9ec309ee72deaa062b6079e3a73072",
      callbackURL: "http://127.0.0.1:8000/auth/facebook/callback"
    },
    (token, refreshToken, profile, done) => done(null, { profile, token })
  )
);

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

const consoleTransport = new winston.transports.Console();

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [consoleTransport]
});

if (process.env.DEBUG) {
  // Print all winston log levels.
  logger.level = "silly";

  // Enable express.js debugging. This logs all received requests.
  app.use(
    expressWinston.logger({
      transports: [consoleTransport],
      winstonInstance: logger
    })
  );
  // Enable request debugging.
  require("request-promise").debug = true;
} else {
  // By default, only print all 'verbose' log level messages or below.
  logger.level = "verbose";
}

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: config.scopes,
    failureFlash: true, // Display errors to the user.
    session: true
  })
);

// Callback receiver for the OAuth process after log in.
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    failureFlash: true,
    session: true
  }),
  (req, res) => {
    // User has logged in.
    logger.info("User has logged in.");
    res.redirect("/");
  }
);

app.listen(8000, () => {
  console.log(`Server is running on 8000`);
});
