import Head from "next/head";
import Image from "next/image";
import Testimonials from "../components/Sections.jsx/Testimonials";
import Hero from "../components/Sections.jsx/hero";
import Spotlight from "../components/Sections.jsx/Spotlight";
import styles from "../styles/Home.module.css";
import Clients from "../components/Sections.jsx/Clients";
import CallToAction from "../components/Sections.jsx/Cta";

export default function Home() {
    return (
        <div>
            <Hero />
            <Spotlight />
            <Testimonials />
            <Clients />
            <CallToAction />
        </div>
    );
}
