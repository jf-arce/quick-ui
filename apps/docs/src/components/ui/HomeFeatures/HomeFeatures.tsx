import { CardHome } from '../CardHome/CardHome';

export default function HomeFeatures(): JSX.Element {
  return (
    <section className="py-12 md:py-24">
    <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 m-auto">
        <CardHome
        title="Hover Effects"
        description="Explore our collection of stunning hover effects."
        >
        <div className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
            hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 
            before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 
            hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  
            origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-40 w-96 border text-left p-3 
            text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] 
            before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 
            after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        </div>
        </CardHome>
        <CardHome
        title="Transform Effects"
        description="Discover our collection of transform animations."
        >
        <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-lg rotate-effect hover:scale-125 transition-transform" />
        </CardHome>

        <CardHome
        title="Translate Effects"
        description="Explore our collection of translate animations."
        >
        <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-lg translate-effect hover:translate-x-10 transition-transform" />
        </CardHome>
    </div>
    </section>
  );
}