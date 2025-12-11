const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const xff = req.headers["x-forwarded-for"];
    let ip;

    if (xff) {
      ip = Array.isArray(xff) ? xff[0] : xff.split(",")[0].trim();
    } else {
      ip = req.socket.remoteAddress || "";
    }

    if (ip.startsWith("::ffff:")) {
      ip = ip.substring(7);
    }

    const response = {
      timestamp: new Date().toISOString(),
      ip: ip,
    };

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`SimpleTimeService listening on port ${PORT}`);
});

