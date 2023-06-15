import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import NavBar from "./components/NavBar/Navbar";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import "./globals.css";

export const metadata = {
  title: "Tank - Recrutement intelligent pour le médical",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnnouncementBar />
        <NavBar />
        <ScrollTop />
        {children}
      </body>
    </html>
  );
}
