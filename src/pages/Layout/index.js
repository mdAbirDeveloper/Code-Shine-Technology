import Footer from "../shared/Footer/Footer";
import Navber from "../shared/navber/Navber";

 
export default function Layout({ children }) {
  return (
    <>
      <Navber />
      <main>{children}</main>
      <Footer />
    </>
  )
}