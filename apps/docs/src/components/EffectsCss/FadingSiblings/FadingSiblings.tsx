import './FadingSiblings.css'

export const FadingSiblings = () : JSX.Element => {
  return (
    <div className="container-siblings flex gap-9 justify-center">
        <div className="sibling cursor-pointer bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 w-32 h-32 rounded-lg rotate-effect hover:scale-125 transition-transform"></div>
        <div className="sibling cursor-pointer bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 w-32 h-32 rounded-lg rotate-effect hover:scale-125 transition-transform"></div>
        <div className="sibling cursor-pointer bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 w-32 h-32 rounded-lg rotate-effect hover:scale-125 transition-transform"></div>
    </div>
  )
}
