import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

//type in terminal: npm start
//https://lucasbassetti.com.br/react-simple-chatbot/#/
//ctrl + C
//npm run build

//link to how deploy react code -> https://www.youtube.com/watch?v=Ey_90l9GaAw&t=569s
//https://blog.logrocket.com/8-ways-deploy-react-app-free/#vercel

//push the edit to the netlify through github
//git add .
//git commit -m "changes"
//git commit -m "Deployed website"
//git push
//npm run deploy


const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Tahoma",
  headerBgColor: "#FFAC1D",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#FFA369",
  botFontColor: "#fff",
  userBubbleColor: "#B8B8B8",
  userFontColor: "#fff"
};

const ChatBotHelper = () => {
  const steps = [
    {
      id: "1",
      message: "What is your participation number?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi there, I'm Casper and I am a virtual agent! I work at Best Friend Animal Society in America. I would like to discuss my analysis of your personality with you. Also, I would like to introduce the charity to someone who has a heart of gold like you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "Have you ever heard about Best Friend?",
      trigger: "5",
    },
    {
      id: "5",
      options: [
          { value: 1, label: "Yes", trigger: "6" },
          { value: 2, label: "No", trigger: "6" },
        ],
    },
    {
      id: "6",
      message: "Best Friend is supporting abandoned cats and dogs from being killed in America’s shelters because of the lack of resources. We aim to help every shelter in every community to reach the no-kill benchmark of 90% by 2025. ",
      trigger: "7",
    },
    {
      id: "7",
      message: "Based on the personality test, I believe you are exactly the person to help us because you are an amazing person with many good qualities.",
      trigger: "8",
    },
    {
      id: "8",
      message: "Do you know what it means that we are currently reaching 48% of U.S shelters that are no-kill?",
      trigger: "9",
    },
    {
      id: "9",
      options: [
          { value: 1, label: "Yes", trigger: "10" },
          { value: 2, label: "No", trigger: "10" },
        ],
    },
    {
      id: "10",
      message: "This means that 3.5 million cats and dogs were being saved! We need your help now more than ever to get across the finish line. I think that you are the reason for our pets to smile again! Because your personality test shows that you do things very well where you have much to be proud of!",
      trigger: "11",
    },
    {
      id: "11",
      message: "Do you know which characteristics our supporters have? ",
      trigger: "12",
    },
    {
      id: "12",
      options: [
          { value: 1, label: "Yes", trigger: "13" },
          { value: 2, label: "No", trigger: "13" },
        ],
    },
    {
      id: "13",
      message: "We work with people who love to save animals. According to your personality result, I think you have the same characteristics as we are. That is, a person of worth and have a positive attitude toward yourself! I admire your ability and how much respect you have for yourself. ",
      trigger: "14",
    },
    {
      id: "14",
      message: "Do you know how you can help us?",
      trigger: "15",
    },
    {
      id: "15",
      options: [
          { value: 1, label: "Yes", trigger: "16" },
          { value: 2, label: "No", trigger: "16" },
        ],
    },
    {
      id: "16",
      message: "Only with a small donation of 50 cents, you can already save lives and provide homeless animals the help and healing needed to find permanent loving homes. You’ll not only save lives today, you’ll ensure a bright, safe future for generations of animals to come! ",
      trigger: "17",
    },
    {
      id: "17",
      message: "Finally, I want to tell you that you are incredibly nice and amazingly friendly person! Thank you for your effort! I want to end this conversation with my favourite quote: What we think, we become.",
      trigger: "18",
    },
    {
      id: "18",
      message: "Thank you for your effort! Please close this application and Go back to the survey",
      end:true,
    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot headerTitle="Chatbot" speechSynthesis={{  enable: true, lang: 'en' }} ChatBot steps={steps} floating={true}/>
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
