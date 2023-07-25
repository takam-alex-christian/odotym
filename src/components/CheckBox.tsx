
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck, faSquare } from "@fortawesome/free-regular-svg-icons"

import { MouseEventHandler } from "react"




interface CheckBoxProps {

  checkState: boolean,
  onCheckChange: MouseEventHandler //this function is defined where this components is used

}

export default function CheckBox(Props: CheckBoxProps) {


  return (
    <button onClick={Props.onCheckChange} className="overflow-hidden p-0">
      <div className={"flex items-center justify-center text-zinc-800 text-xl "}>
        {Props.checkState? <FontAwesomeIcon icon={faSquareCheck}/>: <FontAwesomeIcon icon={faSquare}/>}
      </div>

    </button>
  )
}
