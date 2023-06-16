

//custom imports
import CheckBox from "@/components/CheckBox"
import ToDoInputForm from "@/features/ToDoInputForm"

import ToDoItem from "@/features/ToDoItem"
import ToDoItemList from "@/layouts/ToDoItemList"

export default function Home() {
  return (
    <main className="flex justify-center w-screen h-screen bg-gradient-to-br from-[#00000099] to-transparent ">

      <div className="flex flex-col justify-between w-3/4 h-full overflow-hidden py-6">
        <div className="flex flex-col gap-2">
          
          <div className={"flex flex-col gap-2 py-8"}>
            <div className="text-[#f0f0f0] text-2xl font-semibold">
              My Day
            </div>
            <div className="text-[#FFFFFFBE] text-base">
              Thursday, June 15
            </div>
          </div>

          <ToDoItemList>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
          </ToDoItemList>
        </div>



        <ToDoInputForm />
      </div>

    </main>
  )
}
