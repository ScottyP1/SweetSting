import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function Contact() {
    return (
        <Layout header='Contact Us'>
            <p className="text-white text-center">Feel free to email us with any questions or give us a call.</p>
            <ContactForm />
            <Footer />
        </Layout>

    );
}
