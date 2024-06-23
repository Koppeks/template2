
import { Link } from "react-scroll"
import "./GoUpArrow.css"

export default function GoUpArrow(){
  return(
    <Link
      to="Home"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={120}
        height={120}
        fill="none"
        className="go_up_arrow"
      >
        <circle cx={60} cy={60} r={60} fill="#fff" />
        <path
          fill="#2664EB"
          d="M31.566 35.759A4 4 0 0 0 30 38.933v9.92c0 3.316 3.802 5.192 6.434 3.174L51 40.86v44.1a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-44.1l14.566 11.167C86.198 54.045 90 52.17 90 48.853v-9.92a4 4 0 0 0-1.566-3.174l-26-19.933a4 4 0 0 0-4.868 0l-26 19.933Z"
        />
        <rect width={60} height={6} x={30} y={98.96} fill="#2664EB" rx={3} />
      </svg>
    </Link>
  )
}