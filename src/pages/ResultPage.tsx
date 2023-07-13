import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { ResultData } from "../stores/Result/resultDatas";

export default function ResultPage() {
  const [serchParams] = useSearchParams();
  const mbti = serchParams.get("mbti");
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-yellow-100">
        <Header type="title" questionNo={0} />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="mb-5 text-4xl">결과보기</div>

          <div className=" w-72 mb-5">
            <img className="mask mask-circle" />
          </div>

          <div className="flex flex-col items-center justify-center mb-5 ">
            <div className=" w-full p-5 text-xl text-center">
              예비집사님과 찰떡궁합인 고양이는 {mbti}형 고양이 아비시아니입니다.
            </div>
          </div>
          <button className="btn btn-error text-2xl mb-5 text-white">
            테스트 시작하기
          </button>
        </div>
      </div>
    </>
  );
}
