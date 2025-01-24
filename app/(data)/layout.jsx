import Navbar from "../_components/Navbar";

export default function dataLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
