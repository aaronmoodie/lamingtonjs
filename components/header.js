export default function Header() {
	return (
		<header className="flex justify-between w-full p-4 max-w-screen-xl mx-auto">
			<a className="inline-block w-[46px] rounded-lg overflow-hidden border-[3px] border-[#FFF] dark:border-gray-900" href="/">
				<img src="/images/lammy-icon.png" alt="Home" />
			</a>
			<nav className="flex self-center">
				<ul>
					<li className="px-2 inline"><a href="/">Discord</a></li>
					<li className="px-2 inline"><a href="https://twitter.com/lamingtonjs" target="_blank">Twitter</a></li>
				</ul>
			</nav>
		</header>
	)
}