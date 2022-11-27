import { type NextPage } from "next";
import Head from "next/head";
import ChatBot from "../components/chatBot";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const addCategoriesRoute = trpc.categories.add.useMutation();
  const handleAddCategories = async () => {
    try {
      await addCategoriesRoute.mutateAsync({
        label: "MOVIES",
        name: "Movies",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addQuestionsRoute = trpc.questions.add.useMutation();
  const handleAddQuestions = async () => {
    try {
      await addQuestionsRoute.mutateAsync({
        question: "This is sencond a question",
        id: "2dcebd6a-e550-4f0f-9d13-ac3333abe0cc",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addAnswerRoute = trpc.answer.add.useMutation();
  const handAnswertions = async () => {
    try {
      await addAnswerRoute.mutateAsync({
        answer: "This is a answer",
        id: "121ad082-ffff-40f1-94de-27e2253fe27c",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Help Chat Bot</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <button onClick={handleAddCategories}>Add Category</button>
        <button onClick={handleAddQuestions}>Add Question</button>
        <button onClick={handAnswertions}>Add Answer</button>

        <ChatBot />
      </main>
    </>
  );
};

export default Home;
