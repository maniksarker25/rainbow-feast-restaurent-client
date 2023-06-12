import { FadeLoader } from "react-spinners";

const LoadingSpiner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <FadeLoader color="#B58130" />
    </div>
    );
};

export default LoadingSpiner;