import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

//type in terminal: npm start
//https://lucasbassetti.com.br/react-simple-chatbot/#/
//ctrl + C


//link to how deploy react code -> https://www.youtube.com/watch?v=Ey_90l9GaAw&t=569s
//https://blog.logrocket.com/8-ways-deploy-react-app-free/#vercel

//npm run build
//git add .
//git commit -m "changes"
//git push                           --push the edit to the netlify through github
//npm run deploy

//git show-ref
//git fetch                          --update all new info from github
// git checkout gh-pages // go to the gh-pages branch
// git rebase master // bring gh-pages up to date with master
// git push origin gh-pages // commit the changes
// git checkout master // return to the master branch


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
      message: "Hi, I'm Casper and I am a virtual agent! I work at Best Friend Animal Society in America. In this conversation, I'd like to discuss your personality result whilst I'm introducing the charity to someone who has a heart of gold like you! ",
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
      message: "Best Friend is supporting abandoned cats and dogs from being killed in America’s shelters because of the lack of resources. We aim to help every shelter in every community to reach the no-kill benchmark of 90% by 2025.  ",
      trigger: "7",
    },
    {
      id: "7",
      message: "Do you know what I've found from your personality test?",
      trigger: "8",
    },
    {
      id: "8",
      options: [
          { value: 1, label: "Yes", trigger: "9" },
          { value: 2, label: "No", trigger: "9" },
        ],
    },
    {
      id: "9",
      message: "Well, I found that you are an amazing person with many good qualities which make you the perfect supporter to assist us.",
      trigger: "10",
    },
    {
      id: "10",
      message: "Do you know what it means that we are currently reaching 48% of U.S shelters that are no-kill?",
      trigger: "11",
    },
    {
      id: "11",
      options: [
          { value: 1, label: "Yes", trigger: "12" },
          { value: 2, label: "No", trigger: "12" },
        ],
    },
    {
      id: "12",
      message: "This means that 3.5 million cats and dogs were being saved! We need your help more than ever to get across the finish line. I think that you are the reason for our pets to smile again! Because your personality test shows that you do things very well where you have much to be proud of!",
      trigger: "13",
    },
    {
      id: "13",
      message: "Would you like to know more about us?",
      trigger: "14",
    },
    {
      id: "14",
      options: [
          { value: 1, label: "Yes", trigger: "15" },
          { value: 2, label: "No", trigger: "15" },
        ],
    },
    {
      id: "15",
      message: "We work with people who love to save animals. According to your personality results, I think you have the same characteristics as we are. That is, a person of worth and always have a positive attitude toward yourself!",
      trigger: "16",
    },
    {
      id: "16",
      message: "Would you like to know how you can help us? ",
      trigger: "17",
    },
    {
      id: "17",
      options: [
          { value: 1, label: "Yes", trigger: "18" },
          { value: 2, label: "No", trigger: "18" },
        ],
    },
    {
      id: "18",
      message: "Only with a small donation of 50 cents, you can already save lives and provide homeless animals the help needed to find loving homes. You’ll not only save lives today, you’ll also ensure a bright, safe future! ",
      trigger: "19",
    },
    {
      id: "19",
      message: "Finally, I can conclude that you are an incredibly nice and amazingly friendly person! ",
      trigger: "20",
    },
    {
      id: "20",
      message: "Would you like to know what my favourite quote is to end this conversation?",
      trigger: "21",
    },
    {
      id: "21",
      options: [
          { value: 1, label: "Yes", trigger: "22" },
          { value: 2, label: "No", trigger: "22" },
        ],
    },
    {
      id: "22",
      message: "My favourite quote is: What we think, we become.",
      trigger: "23",
    },
    {
      id: "23",
      message: "Thank you. Please close this application and Go back to the survey!",
      end:true,
    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot headerTitle="Chatbot" ChatBot steps={steps} floating={true}/>
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
