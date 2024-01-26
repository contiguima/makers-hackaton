import "./globals.css";



export const metadata = {
  title: "To do list - Makers",
  description: "This is a project to make a to do list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
