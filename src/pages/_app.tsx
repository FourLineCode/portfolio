import { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Akmal Hossain</title>
				<link
					rel='icon'
					href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vexels.com%2Fpng-svg%2Fpreview%2F147102%2Finstagram-profile-icon&psig=AOvVaw2ALQP_wnvqr1tFMOzlZx5b&ust=1615387019898000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCY3963o-8CFQAAAAAdAAAAABAD'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
