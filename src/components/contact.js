import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"], weight: "600" });


const Contact = () => {
  return (
    <div id="contact">
      <h2 className={` text-center text-4xl pt-5 ${syne.className}`}>
        <span className="gradient-text">#</span>Contact
      </h2>
    </div>
  );
};

export default Contact;
