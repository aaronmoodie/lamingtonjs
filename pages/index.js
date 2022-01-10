export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <div className="px-16">
        <div className="max-w-sm mx-auto">
          <img className="w-full" src="/images/lammy.png" alt="Lamington JS charater" />
        </div>
      </div>
      <h1 className="text-5xl sm:text-7xl font-bold my-4 sm:my-6">
        Lamington JS
      </h1>
      <p className="text-2xl text-[#E0797B]">An antipodean JavaScript community</p>
    </div>
  )
}
