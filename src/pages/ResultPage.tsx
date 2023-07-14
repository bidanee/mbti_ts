import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { ResultData } from "../stores/Result/resultDatas";
import { IResult } from "../stores/Result/types";

export default function ResultPage() {
  const [serchParams] = useSearchParams();
  const mbti = serchParams.get("mbti");
  const testResult = ResultData.find((cat: IResult) => cat.best === mbti);
  const friendCat = ResultData.find(
    (friend) => friend.best === testResult?.mbti
  );

  return (
    <>
      <div className="w-full h-screen flex flex-col bg-yellow-100">
        <Header type="title" questionNo={0} />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="mb-5 text-4xl">결과보기</div>

          <div className=" w-72 mb-5">
            <img className="mask mask-circle" src={testResult?.img} />
          </div>

          <div className="flex flex-col items-center justify-center mb-5 ">
            <div className=" w-full mb-1 px-5 text-lg text-center">
              {testResult?.best}형 예비집사님과 찰떡궁합인 고양이는
              {testResult?.mbti}형 고양이 {testResult?.name}입니다.
            </div>
            <div className="px-5 text-sm mt-1 mb-1 font-normal">
              {testResult?.desc}
            </div>
            <div className="px-8 mt-1 text-center text-blue-600 ">
              나의 고양이와 잘 맞는 형제묘로는 {friendCat?.name} 추천드려요.
            </div>
          </div>
          <div className="flex">
            <button className="btn btn-error mr-3 text-white">
              테스트 다시하기
            </button>
            <button className="btn btn-warning text-white">
              카카오톡 공유하기
            </button>
          </div>
        </div>
      </div>
      <div className="adfit" />
    </>
  );
}
