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
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <div className="flex flex-col w-full h-screen bg-yellow-100 justify-center">
      <Header type="progress" questionNo={questionNo} />
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="text-xl sm:text-3xl text-center mb-10 p-7">
          {QuestionData[questionNo].title}
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            className="w-[20rem] sm:w-[28rem] text-sm sm:text-lg h-24 btn btn-warning text-neutral-500 m-2 p-1"
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </button>
          <button
            className="w-[20rem] sm:w-[28rem] h-24 btn btn-warning text-neutral-500 m-2 text-sm sm:text-lg"
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </button>
        </div>
      </div>
    </div>
  );
}
