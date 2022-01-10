import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<>
			<div className="flex flex-col min-h-screen text-gray-900 dark:text-[#FFF] bg-white dark:bg-gray-800 antialiased tracking-tight">
				<Head>
					<title>Lamington JS</title>
					<link rel="icon" href="/icons/favicon.ico?v=3" />
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