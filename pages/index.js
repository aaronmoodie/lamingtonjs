import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-gray-900 dark:text-[#FFF] bg-white dark:bg-gray-800">
      <Head>
        <title>Lamington JS</title>
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>
      
      <header className="flex justify-between w-full p-4 max-w-screen-xl mx-auto">
        <a className="inline-block w-[46px] rounded-lg overflow-hidden border-[3px] border-[#FFF] dark:border-gray-900" href="/">
          <img src="/lammy-icon.png" alt="Home" />
        </a>
        <nav className="flex self-center">
          <ul>
            <li className="px-2 inline"><a href="/">Discord</a></li>
            <li className="px-2 inline"><a href="/">Twitter</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="max-w-sm mx-auto">
          <img className="w-full" src="/lammy.png" alt="Lamington JS charater" />
        </div>
        <h1 className="text-7xl font-bold my-6">
          Lamington JS
        </h1>
        <p className="text-2xl text-[#F2A7A9]">An antipodean JavaScript community</p>

      </main>

      <footer className="flex items-center justify-center w-full h-16 text-gray-500">
        <nav>
          <ul>
            <li className="px-2 inline"><a href="/">About &amp; contact</a></li>
            <li className="px-2 inline"><a href="/">Code of conduct</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
