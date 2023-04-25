import Navbar from "../../Components/Navbar/Navbar"
import Buttons from "../../Components/utils/Buttons/Buttons"

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className="LandingDiv h-[100vh] bg-slate-200 flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl">Your Patner In Quality</h1>
            <h2 className=" mt-2 font-bold text-5xl text-blue-700">Building Meterials.</h2>
            <p className="mt-2 text-base font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="mt-2 text-base font-medium ">Lorem ipsum dolor sit amet consectetur </p>
            <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#8b8986"} text={"Call Us"} borderRadius={"15px"} />
        </div>
        <div className="SecondDiv bg-blue-300" >
            <div className="TopPosition flex">
                <div className="FirstDiv">
                    <h2>Who're We <span>?</span></h2>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#8b8986"} text={"Call Us"} borderRadius={"15px"} />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolorem reprehenderit, assumenda temporibus fugit tempore,
                        non sed, rem iure soluta ut velit repellat hic quisquam architecto ipsa facilis. Placeat eveniet similique quo? Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Nisi quo ad accusantium at, earum mollitia excepturi dolores.
                        Possimus dolores nulla, at minus, dignissimos a ex expedita laudantium praesentium molestias quo rem laborum inventore
                        aliquid totam quidem rerum nihil architecto error. Neque fuga modi architecto facere dolor pariatur quae temporibus quo harum, 
                        fugit maxime ipsam ipsa cupiditate unde nesciunt quibusdam, sapiente, assumenda obcaecati soluta. Exercitationem.
                    </p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Home