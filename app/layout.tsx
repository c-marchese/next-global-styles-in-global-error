import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

import "./global.css";

export default function RootLayout({ children }) {
  if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
    throw new Error("Error");
  }

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
