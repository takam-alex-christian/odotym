
// import { CheckIcon } from "@heroicons/react/20/solid"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { MouseEventHandler } from "react"




interface CheckBoxProps {

  checkState: boolean,
  onCheckChange: MouseEventHandler //this function is defined where this components is used

}

export default function CheckBox(Props: CheckBoxProps) {


  return (
    <button onClick={Props.onCheckChange} className="w-5 h-5 rounded-full border-2 border-zinc-800 overflow-hidden p-0">
      <div className={"flex items-center justify-center text-zinc-800 text-sm "}>
        {Props.checkState && <FontAwesomeIcon icon={faCheck}  />}
      </div>
    </button>
  )
}
