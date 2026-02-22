const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Your content lives here (easy to edit) ----
const profile = {
  name: "Lucas Barlach",
  tagline: "Software Technology Student • IT support/Developer (Gladteknik)",
  location: "Copenhagen Denmark",
  email: "lucas@egtvedbarlach.dk",
  phone: "+45 25 72 06 69",
  headline: "Hi. I’m Lucas.",
  intro:
    "I build practical web apps and automations that turn messy workflows into simple tools. I like clean UI, reliable backend code, and shipping things that people actually use.",

  // Replace these with your real links
  links: [
    { label: "Email", href: "mailto:lucasbarlach@gmail.com", kind: "primary" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-egtved-barlach", kind: "ghost" },
    { label: "GitHub", href: "https://github.com/TheBarlach", kind: "ghost" },
    { label: "Projects", href: "#work", kind: "ghost" },
    { label: "Contact", href: "#contact", kind: "ghost" }
  ],

  // “Business card” quick facts
  facts: [
    { k: "Role", v: "Developer + Support" },
    { k: "Focus", v: "Automation, portals, integrations" },
    { k: "Stack", v: "Node.js, C#, SQL, n8n" },
    { k: "Timezone", v: "Europe/Copenhagen" }
  ],

  // Tech chips
  tech: [
    "Node.js",
    "Express",
    "C# / .NET",
    "Blazor",
    "SQL",
    "PostgreSQL",
    "n8n",
    "GitLab CI/CD",
    "Kubernetes",
    "Terraform"
  ],

  // Optional “stats” section (edit to fit reality)
  stats: [
    {
      label: "Years with programming",
      value: new Date().getFullYear() - 2018
    },
    { label: "Workflows automated", value: "20+" },
    { label: "Portals / forms shipped", value: "10+" },
    { label: "Side projects", value: "Always" }
  ],

  // Portfolio cards — rewrite these to match your real work
  projects: [
    {
      title: "GladTeknik — Customer Portal & Forms",
      description:
        "Designed and implemented partner flows and forms that capture the right data, reduce back-and-forth, and standardize incoming cases.",
      bullets: ["Dynamic forms", "Validation + routing", "Operational clarity"],
      tech: ["n8n", "Node.js", "JSON", "Email automation"],
      links: [
        { label: "Internal Project (B2B Operations)", href: "#", disabled: true }
      ]
    },
    {
      title: "Order Management (Blazor)",
      description:
        "Built UI and logic for creating/modifying orders with searchable dropdowns and per-order pricing without changing global product prices.",
      bullets: ["Search + pagination", "Order-specific pricing", "Clean UI patterns"],
      tech: ["C#", "Blazor", "SQL"],
      links: [{ label: "Repo", href: "https://github.com/RasmusLiltorp/OMS-Test", disabled: false }]
    },
    {
      title: "CI/CD Modular Pipelines",
      description:
        "Worked on modular pipelines and documentation for multi-language projects with reusable templates and consistent build standards.",
      bullets: ["Reusable pipeline modules", "Docs + wikis", "DevOps hygiene"],
      tech: ["GitLab CI", "Kubernetes", "Terraform"],
      links: [{ label: "Private Repo (SDU)", href: "https://gitlab.sdu.dk/3rd-semester-project/Continuous-Integration-team/pipelines", disabled: true }]
    }
  ]
};
// -----------------------------------------------

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { profile });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});