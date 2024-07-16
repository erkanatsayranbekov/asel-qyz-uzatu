import CountDown from "./components/Countdown";
function App() {
  return (
    <div className="App overflow-hidden" >
      <div className="flex flex-col items-center justify-between relative">
        <img src="./asel2.jpg" alt="asel" className=""/>
        <CountDown />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        <img src="./goold.png" alt="gold" className="absolute bottom-0 rotate-[30deg]"/>
      </div>
      <div className="px-10 z-10 absolute top-[500px] left-0 right-0">
          <h1 className="text-center font-extralight text-4xl text-[#D4AF37]">Шақыру</h1>
          <p className="text-center">Құрметті aғайын-туыс,<br /> құда-жекжат, дос жарандар! <br />
          Сіздерді аяулы қызымыз Асельдің ұзату тойына арналған салтанатты дастарханның қадірлі қонағы болуға шақырамыз. <br />Той<b> 19-шілде</b> күні, сағат <b>17:00-де</b> басталады.</p>
      </div>
      <img src="./oyu.png" alt="oyu" className=" mt-48 w-[80%] mx-auto"/>
    </div>
  );
}

export default App;
