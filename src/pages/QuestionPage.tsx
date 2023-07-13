import { useState } from "react";
import Header from "../components/Header";
import { QuestionData } from "../stores/Question/questionDatas";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + ans } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <div className="flex flex-col w-full h-screen bg-yellow-100">
      <Header type="progress" questionNo={questionNo} />
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="mb-12 text-3xl text-center">
          {QuestionData[questionNo].title}
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            className="w-3/4 h-16 btn btn-warning text-neutral-500 m-2 text-lg"
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </button>
          <button
            className="w-3/4 h-16 btn btn-warning text-neutral-500 m-2 text-lg"
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </button>
        </div>
      </div>
    </div>
  );
}
