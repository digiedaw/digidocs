import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const categories = [
  {
    icon: "🐉",
    title: "Digimon",
    description: "Digimon database, attributes and evolution.",
    link: "/docs/category/digimon",
  },
  {
    icon: "⚔️",
    title: "Dungeons",
    description: "Early, Mid and Late Game dungeons.",
    link: "/docs/category/dungeon",
  },
  {
    icon: "🧬",
    title: "Evolution",
    description: "Jogress, Burst Mode and X Evolution.",
    link: "/docs/category/evolution",
  },
  {
    icon: "🎭",
    title: "Roles",
    description: "Tank, Skill and Auto Attack builds.",
    link: "/docs/category/role",
  },
  {
    icon: "🚀",
    title: "Getting Started",
    description: "Everything a new player should know.",
    link: "/docs/category/getting-started",
  },
];

export default function Wiki() {
  return (
    <Layout title="Browse Wiki">
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Browse Wiki</h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "1rem auto 3rem",
          }}
        >
          Choose a category to start exploring DigiDocs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#1e293b",
                  borderRadius: "18px",
                  padding: "2rem",
                  height: "100%",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div style={{ fontSize: "2.5rem" }}>{cat.icon}</div>

                <h2>{cat.title}</h2>

                <p>{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}