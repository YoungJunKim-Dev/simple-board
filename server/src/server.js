const express = require("express");
const passport = require("passport");
const strategy = require("./config/passport");
passport.use(strategy);

const membersRouter = require("./routes/members");
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/members", membersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server is running on ${port}port.`));

// [
//   {
//     id: 1,
//     image:
//       "https://gravatar.com/avatar/a19eaf33ba3ddb99857e706707c9a633?s=400&d=robohash&r=x",
//     name: "홍길동",
//     birth: "901203",
//     nationality: "ROK",
//   },
//   {
//     id: 2,
//     image:
//       "https://gravatar.com/avatar/f806908a823a4739472e9307f5ef15e6?s=400&d=robohash&r=x",
//     name: "임꺽정",
//     birth: "910823",
//     nationality: "USA",
//   },
//   {
//     id: 3,
//     image:
//       "https://gravatar.com/avatar/1928a113a207238e04db9ef0aefcb2de?s=400&d=robohash&r=x",
//     name: "강호동",
//     birth: "880213",
//     nationality: "UK",
//   },
// ]
