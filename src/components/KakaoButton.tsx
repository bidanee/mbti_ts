import { useEffect } from "react";
import { IResult } from "../stores/Result/types";

const Kakao = (window as any).Kakao;

interface Props {
  data: IResult;
}

export default function KakaoButton(props: Props) {
  const url = "https://mbtitesttscat.netlify.app";
  const resultUrl = window.location.href;

  useEffect(() => {
    if (!Kakao.isInitialized()) Kakao.init("bdafa04b87a1c56efb686d867deb8c37");
  }, []);
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "😼 예비집사 판별기 결과😼",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.img,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "테스트하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <button onClick={shareKakao} className="btn btn-warning text-white">
      카카오톡 공유하기
    </button>
  );
}
