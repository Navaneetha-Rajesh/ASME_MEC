import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { SLTPage } from "./components/SLTPage";
import { EventsPage } from "./components/EventsPage";
import { AchievementsPage } from "./components/AchievementsPage";
import { PublicationsPage } from "./components/PublicationsPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "slt":
        return <SLTPage />;
      case "events":
        return <EventsPage />;
      case "achievements":
        return <AchievementsPage />;
      case "publications":
        return <PublicationsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
}