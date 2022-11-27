import { type Category } from "@prisma/client";
import { type Dispatch, type SetStateAction, type FC, useState } from "react";
import type { MessageHistory, Step } from "../../types/message";
import AnswerMessage from "./answerMessage";
import CategoryMessage from "./categoryMessage";
import QuestionMessage from "./questionMessage";

type Props = {
  messagesHistory: MessageHistory[];
  setMessagesHistory: Dispatch<SetStateAction<MessageHistory[]>>;
};

const LatestMessage: FC<Props> = ({ messagesHistory, setMessagesHistory }) => {
  //step state
  const [step, setStep] = useState<Step>("CATEGORY");

  //current category selected
  const [currentCategory, setCurrentCategory] = useState<Category>("SPORTS");

  //current question id
  const [currentQuestionId, setCurrentQuestionId] = useState<string>("");

  if (step === "CATEGORY") {
    return (
      <CategoryMessage
        messagesHistory={messagesHistory}
        setMessagesHistory={setMessagesHistory}
        setStep={setStep}
        setCurrentCategory={setCurrentCategory}
      />
    );
  }

  if (step === "QUESTION") {
    return (
      <QuestionMessage
        messagesHistory={messagesHistory}
        setMessagesHistory={setMessagesHistory}
        setStep={setStep}
        currentCategory={currentCategory}
        setCurrentQuestionId={setCurrentQuestionId}
      />
    );
  }

  if (step === "ANSWER") {
    return (
      <AnswerMessage
        messagesHistory={messagesHistory}
        setMessagesHistory={setMessagesHistory}
        setStep={setStep}
        currentQuestionId={currentQuestionId}
      />
    );
  }

  return <div>Something went wrong</div>;
};

export default LatestMessage;
