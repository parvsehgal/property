import Footer from "@/components/ui/self/footer";
import Navbar from "@/components/ui/self/Navbar";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
