import Logo from "@/app/assets/images/logo.jpg";

export default function Home() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div>
				<img src={Logo.src} />
			</div>
		</div>
	);
}
