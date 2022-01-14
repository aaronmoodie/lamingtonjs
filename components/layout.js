import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<>
			<div className="layout-container">
				<Head>
					<title>Lamington JS</title>
					<link rel="icon" href="/icons/favicon.ico?v=3" />
					// TODO Open graph items
				</Head>
				
				<Header />
				<main className="flex flex-1 w-full max-w-screen-xl mx-auto p-4 ">
					{children}
				</main>
				<Footer />
			</div>
		</>
	)
}