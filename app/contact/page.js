import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div className="contact">
            <h1 className="text-4xl lg:text-5xl text-white text-center mt-24 xl:mt-32 tracking-[15px]">Contact Us</h1>
            <ContactForm />
            <Footer />
        </div>
    );
}
