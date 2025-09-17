import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreChallenge from "../components/CoreChallenge";
import UserPersonas from "../components/UserPersonas";
import CoreFeatures from "../components/CoreFeatures";
import SmartNotificationFlow from "../components/SmartNotificationFlow";
import About from "../components/About";
import Impact from "../components/Impact";
import WhatsAppgmailHighlight from "@/src/components/WhatsAppGmailHighlight";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <CoreChallenge />
      <UserPersonas />
      <CoreFeatures />
      <SmartNotificationFlow />
      <About />
      <Impact />
      <WhatsAppgmailHighlight />
      <Footer />
    </main>
  );
}
