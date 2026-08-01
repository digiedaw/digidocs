import React from "react";
import Link from "@docusaurus/Link";

export default function klik({ to }) {
  return (
    <Link
      className="button button--primary button--sm"
      to={to}
    >
      View Guide
    </Link>
  );
}