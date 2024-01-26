import Image from "next/image";
import "./globals.css"
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <main>
      <div className="mainpage-text">
        <h2>Welcome to your personal</h2>
        <h1>TO DO LIST</h1>
        <h2>This is how truly <i>Makers</i> plan their days!</h2>
        <Dashboard/>
      </div>
    </main>
  );
}
