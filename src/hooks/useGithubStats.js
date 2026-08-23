"use client";

import { useEffect, useState } from "react";

const GH_USER = "JoaoVictorCalaca";

export function useGithubStats() {
  const [stats, setStats] = useState({ repos: null, stars: null, since: null });

  useEffect(() => {
    fetch(`https://api.github.com/users/${GH_USER}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((u) => {
        if (!u) return;
        setStats((s) => ({
          ...s,
          repos: u.public_repos,
          since: (u.created_at || "").slice(0, 4),
        }));
      })
      .catch(() => {});

    fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100`)
      .then((r) => (r.ok ? r.json() : null))
      .then((repos) => {
        if (!Array.isArray(repos)) return;
        const stars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
        setStats((s) => ({ ...s, stars }));
      })
      .catch(() => {});
  }, []);

  return {
    repos: stats.repos != null ? String(stats.repos) : "—",
    stars: stats.stars != null ? String(stats.stars) : "—",
    since: stats.since || "2022",
  };
}
