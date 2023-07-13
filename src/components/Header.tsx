import { QuestionData } from "../stores/Question/questionDatas";

interface Props {
  type: string;
  questionNo: number;
}

export default function Header(props: Props) {
  return (
    <div className="bg-orange-400 flex text-4xl items-center justify-center p-4">
      {props.type === "progress" ? (
        <progress
          className="progress progress-error w-full h-7"
          value={(props.questionNo / QuestionData.length) * 100}
          max="100"
        ></progress>
      ) : (
        <div> 😼 예비집사 판별기 😼</div>
      )}
    </div>
  );
}
