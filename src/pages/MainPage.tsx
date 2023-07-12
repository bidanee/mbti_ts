import { useNavigate } from "react-router-dom";
import MainImg from "../assets/mainImg.jpg";

export default function MainPage() {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <>
      <div className="w-full h-full flex flex-col bg-yellow-100">
        <div className="bg-orange-400 flex text-5xl items-center justify-center p-4">
          😼 예비집사 판별기 😼
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="mb-5 text-3xl">나에게 맞는 주인님은?</div>
          <div className="avatar">
            <div className="rounded-full w-72 mb-5">
              <img src={MainImg} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <div>나랑 잘 맞는 고양이 찾기!</div>
            <div>내가 집사가 되서 고양이를 키운다면..?</div>
          </div>
          <button
            className="btn btn-error text-2xl mb-5 text-white"
            onClick={handleClickButton}
          >
            테스트 시작하기
          </button>
        </div>
      </div>
    </>
  );
}
