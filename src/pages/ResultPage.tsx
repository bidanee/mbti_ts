import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { ResultData } from "../stores/Result/resultDatas";
import { IResult } from "../stores/Result/types";
import KakaoButton from "../components/KakaoButton";

export default function ResultPage() {
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();
  const mbti = serchParams.get("mbti");
  const testResult: IResult = ResultData.find(
    (cat: IResult) => cat.best === mbti
  ) ?? {
    id: 0,
    name: "",
    best: "",
    desc: "",
    img: "",
    mbti: "",
  };
  const friendCat = ResultData.find(
    (friend) => friend.best === testResult?.mbti
  );

  return (
    <>
      <div className="w-full h-screen flex flex-col bg-yellow-100 justify-center">
        <Header type="title" questionNo={0} />
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl sm:text-3xl mb-4">결과보기</div>

          <div className="mb-2">
            <img
              className="mask w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] mask-squircle "
              src={testResult?.img}
            />
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="w-[20rem] sm:w-[28rem] mb-2 px-5 text-lg sm:text-xl text-center font-black ">
              <span className="text-red-200">{testResult?.best}</span>형
              예비집사님과 찰떡궁합인 고양이는
              <span className="text-red-200">{testResult?.mbti}</span>형 고양이{" "}
              {testResult?.name}입니다.
            </div>
            <div className="w-[20rem] sm:px-5 text-sm sm:text-base mt-1 mb-1 font-normal sm:w-[28rem] md:w-[32rem]">
              {testResult?.desc}
            </div>
            <div className="sm:px-8 mt-2 text-center mb-4">
              나의 고양이와 잘 맞는 형제묘로는{" "}
              <span className="text-blue-300">{friendCat?.name}</span>{" "}
              추천드려요.
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => navigate("/")}
              className="btn btn-error mr-3 text-white"
            >
              테스트 다시하기
            </button>
            <KakaoButton data={testResult} />
          </div>
        </div>
      </div>
      <div className="adfit" />
    </>
  );
}
