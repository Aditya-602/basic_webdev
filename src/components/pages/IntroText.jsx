import video1 from "../../assets/video1.mp4";

const IntroText = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
      />
      <div className="absolute bg-black bg-opacity-75 w-full h-full "></div>
      <div className="relative flex flex-col items-center">
        <div className="text-white text-center space-y-2 animate-fadeInUp p-6">
          <h1 className="text-6xl">Target discovery</h1>
          <h1 className="text-6xl">Knowledegbase Platform</h1>
        </div>
      </div>
    </div>
  );
};

export default IntroText;