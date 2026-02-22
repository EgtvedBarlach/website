// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>My Node.js Homepage</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <header class="header">
    <div class="container">
      <h1>Welcome 👋</h1>
      <p class="subtitle">This is a simple homepage running on Node.js + Express.</p>
      <nav class="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="card">
      <h2>Quick info</h2>
      <ul>
        <li><strong>Server:</strong> Express</li>
        <li><strong>Port:</strong> ${PORT}</li>
        <li><strong>Time:</strong> ${new Date().toISOString()}</li>
      </ul>
      <button id="btn" class="btn">Click me</button>
      <p id="msg" class="msg" aria-live="polite"></p>
    </section>

    <section class="grid">
      <div class="tile">
        <h3>Fast</h3>
        <p>Minimal setup. Easy to extend with routes and APIs.</p>
      </div>
      <div class="tile">
        <h3>Simple</h3>
        <p>One server file + a public folder for static assets.</p>
      </div>
      <div class="tile">
        <h3>Ready</h3>
        <p>Add pages, templates, or React later if you want.</p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <small>© ${new Date().getFullYear()} My Node.js Site</small>
    </div>
  </footer>

  <script>
    const btn = document.getElementById("btn");
    const msg = document.getElementById("msg");
    btn.addEventListener("click", async () => {
      try {
        const res = await fetch("/api/hello");
        const data = await res.json();
        msg.textContent = data.message;
      } catch {
        msg.textContent = "Something went wrong.";
      }
    });
  </script>
</body>
</html>`);
});

// Example about page
app.get("/about", (req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>About</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <main class="container">
    <a href="/" class="back">← Back</a>
    <h1>About</h1>
    <p>This is a basic Node.js site using Express.</p>
  </main>
</body>
</html>`);
});

// Small API endpoint used by the button
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from your Node.js server 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});