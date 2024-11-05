const http = require("http");
const PORT = 8080;
const data = [
  {
    id: 1,
    name: "khangal",
    age: 13,
  },
  {
    id: 2,
    name: "iveel",
    age: 14,
  },
  {
    id: 3,
    name: "test",
    age: 0,
  },
];

const a = JSON.stringify(data);

const servers = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;
  console.log(url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (method === "GET") {
    if (url.startsWith("/users?id=")) {
      const id = url.split("=")[1];
      const user = data.find((user) => user.id === Number(id));
      console.log({ user });
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.write(JSON.stringify({ message: "user not found" }));
      }
    } else {
      res.write(JSON.stringify(data));
    }
  }

  if (method === "POST") {
    let body = "";
    req.on("data", (buffer) => {});
  }

  res.end();
});

servers.listen(PORT, console.log("your server is running"));
