import { Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import useCommandStore from "@/app/store/commandStore";

let backend = [
    { name : "tailwind", command : "tailwind", img : "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png"},
    { name : "bootsrap", command : "bootsrap", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64cO7dEoEn8AAsW6oJQM1OnKZU4ND8gGUe0EqtPyr7Ofx5EfljQHDwrqlPZKZEN5AMyI&usqp=CAU"},
    { name : "material ui", command : "passport-js", img : "https://pbs.twimg.com/profile_images/1798056830041788417/HIapkjDx_400x400.jpg"},
    { name : "react query", command : "cors", img : "https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png"},
    { name : "socket io", command : "socket-io", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"},
    { name : "gemeni", command : "@google/generative-ai", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"},
    { name : "open ai", command : "openai", img : "https://cdn.worldvectorlogo.com/logos/openai-2.svg"},
    { name : "axios", command : "axios", img : "https://www.pngitem.com/pimgs/m/91-913031_axios-axios-logo-hd-png-download.png"},
    { name : "cookie parser", command : "cookie-parser", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjCGnxYtwOu0H5owyaoSvbof60Y4OQt0vuQ&s"},
    { name : "express validator", command : "express-validator", img : "https://images.opencollective.com/express-validator/36a8af1/logo/256.png"},
    { name : "JWT", command : "jwt", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Pte0L4XLvNqEWXbkCXk_LDN6eSpcaDDLhQ&s"},
    { name : "multer", command : "multer  ", img : "https://miro.medium.com/v2/resize:fit:1400/1*QTZvtnHWanNxBQBynhtlIA.png"},
  ]


export default function FrontendSection()
{

   
    let setCommand = useCommandStore((state) => state.setCommand)
   

    let checkBox = (command: string): void => {
        setCommand(command)
    }


    return(
        <div className="  h-96   rounded overflow-hidden drop-shadow-lg" style={{backgroundColor : "#e1e4e6"}}>
          <div className=" h-1/6 flex justify-center place-items-center bg-black">
            <Typography variant="h4" className="text-center text-black font-bold text-white"> Frontend </Typography>
          </div>

          <div className=" w-11/12 m-auto h-5/6 grid grid-cols-3   gap-3 overflow-auto hide-scrollbar " >
            {
              backend.map((library) => {
                return(
                <div key={library.name} className="h-32 mt-2  overflow-hidden  rounded-[1vw] bg-white drop-shadow-lg">
                  <div className="h-4/6   flex justify-center place-items-center hover:scale-125 transition">
                      <img src={library.img}  style={{width : "60%", height : "60%"}} className=""/>
                  </div>

                  <div className="h-2/6   flex " style={{backgroundColor : "#F0F5F9"}}>
                      <div className="w-9/12  flex justify-center place-items-center">
                          <Typography className=" font-bold text-sm/6 m-3 text-center " style={{lineHeight  : "15px", color : "#191919"}}> {library.name} </Typography>
                      </div>

                      <div className="w-3/12  flex justify-center place-items-center">
                        <Checkbox onChange={() => checkBox(library.command)} color="default"/>
                      </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
    )
}