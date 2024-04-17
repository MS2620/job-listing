import { League_Spartan } from "next/font/google";
import "./globals.css";

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Job Listing with filtering",
  description: "Job Listing with filtering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>{children}</body>
    </html>
  );
}
