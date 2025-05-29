import React from 'react'
import { MoveUpRight } from 'lucide-react'
type Props = {
    text:string,
    onClick?: () => void,
    textcolor?: string,
    className?: string
}

const ArrowButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={`flex items-center gap-2 px-4 py-2  ${props.className}`}>
        <span className={`font-medium ${props.textcolor}`}>{props.text}</span>
        <MoveUpRight className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors" />
    </button>
  )
}
export default ArrowButton