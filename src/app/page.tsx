export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="group relative w-[300px] h-[400px] mx-12 my-8">
        <div className="bg-[url('/bg.jpg')] absolute w-full h-full bg-cover rounded transition-transform duration-1000 group-hover:leanback"></div>

        <div className="absolute w-[300px] h-[300px] bg-no-repeat bg-[url('/img21.png')] animate-gifAnimation bottom-0 transition-transform duration-1000 group-hover:transform group-hover:translate-y-[-200px] group-hover:translate-x-[-50px] group-hover:animation-running animation-paused"></div>
      </div>
    </div>
  );
}
