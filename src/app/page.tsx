"use client";
import HeroSection from "@/components/hero-section/HeroSection";
import Bar from "@/components/img-vid-bar/bar";
import TitleSection from "@/components/titleBar/mainSection";
import ImageBox from "@/components/ImageBox/ImageBox";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from "@/components/header/header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
	return (
		<>
			<Provider store={store}>
				<Header />
				<HeroSection />
				<Bar />
				<TitleSection
					title="Free Stock Photos"
					titleClassName="font-medium mt-8"
				/>
				<Footer />
			</Provider>
		</>
	);
}
