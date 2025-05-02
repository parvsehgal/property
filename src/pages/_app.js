import "@/styles/globals.css";
import Navbar from "@/components/ui/self/Navbar";
import Footer from "@/components/ui/self/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
