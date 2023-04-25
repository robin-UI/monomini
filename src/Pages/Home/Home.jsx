import Navbar from "../../Components/Navbar/Navbar"
import Buttons from "../../Components/utils/Buttons/Buttons"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="LandingDiv h-[100vh] bg-slate-200 flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl">Your Patner In Quality</h1>
                <h2 className=" mt-2 font-bold text-5xl text-blue-700">Building Meterials.</h2>
                <p className="mt-2 text-base font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="mt-2 text-base font-medium ">Lorem ipsum dolor sit amet consectetur </p>
                <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#8b8986"} text={"Call Us"} borderRadius={"15px"} />
            </div>
            <div className="SecondDiv bg-blue-400 relative" >

                <div className="TopPosition flex absolute bg-blue-200 p-9  hidden    rounded-[1rem] border-2 border-black drop-shadow-xl">
                    <div className="FirstDiv w-[10rem]">
                        <h2>Who're We <span>?</span></h2>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#8b8986"} text={"Call Us"} borderRadius={"15px"} />
                    </div>
                    <div className="w-[37rem]">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolorem reprehenderit, assumenda temporibus fugit tempore,
                            non sed, rem iure soluta ut velit repellat hic quisquam architecto ipsa facilis. Placeat eveniet similique quo? Lorem ipsum,
                            dolor sit amet consectetur adipisicing elit. Nisi quo ad accusantium at, earum mollitia excepturi dolores.
                            Possimus dolores nulla, at minus, dignissimos a ex expedita laudantium praesentium molestias quo rem laborum inventore
                            aliquid totam quidem rerum nihil architecto error. Neque fuga modi architecto facere dolor pariatur quae temporibus quo harum,
                            fugit maxime ipsam ipsa cupiditate unde nesciunt quibusdam, sapiente, assumenda obcaecati soluta. Exercitationem.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="secondSection flex">
                    <div className="LeftSection w-[76rem]">
                        <div className="TopSection">
                            <h2>Why Choose Indora?</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, iusto?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, iusto?</p>

                        </div>
                        <div className="BottomSection">
                            <p>Lorem, ipsum?</p>
                            <p>Lorem, ipsum?</p>
                            <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#8b8986"} text={"Call Us"} borderRadius={"20px"} />
                        </div>
                    </div>

                    <div className="RightSection `">
                        <div className="Cards grid grid-cols-2 grid-rows-2 gap-2">
                            <div className="Card bg-slate-50 p-4    rounded-[1rem] border-2 border-black drop-shadow-xl">
                                <div className="Top flex justify-between">
                                    <h4 className="bg-blue-400 text-white p-3">1</h4>
                                    <h1>This is the headin</h1>
                                </div>
                                <div className="Bottom">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ab dolores sunt nostrum eligendi,
                                        minus possimus suscipit enim deleniti? Qui velit dolorem non odit!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home