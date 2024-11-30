import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return ( 
    <>
      <button><Link href="/">Back</Link></button>
      <div className="flex flex-row items-center justify-between w-full">
        <ContactForm />
        <img src="/VELOXITI_V.png" alt="Logo" className="object-contain w-[550px] pr-20" />
      </div>
    </>
  );
}

export default Contact;