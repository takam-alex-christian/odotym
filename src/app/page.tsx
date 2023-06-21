


//custom imports
import ToDoInputForm from "@/features/ToDoInputForm"

import ToDoItemsView from "@/features/ToDoItemsView"

export default async function Home() {




  return (
    <main className="flex justify-center w-screen h-screen bg-gradient-to-br from-[#00000099] to-transparent ">

      <div className="flex flex-col justify-between w-3/4 h-full overflow-hidden py-6">
        <div className="flex flex-col gap-2">

          <div className={"flex flex-col gap-1 py-8"}>
            <div className={`text-[#ffffff] text-2xl font-semibold tracking-wide`}>
              My Day
            </div>
            <div className="text-[#FFFFFFD0] drop-shadow-lg  text-base font-light">
              Thursday, June 15
            </div>
          </div>

          <ToDoItemsView />
          
        </div>



        <ToDoInputForm />
      </div>

    </main>
  )
}
