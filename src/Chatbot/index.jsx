import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

//type in terminal: npm start       --- shows a test browser in localhost
//https://lucasbassetti.com.br/react-simple-chatbot/#/
//ctrl + C                          --- quit test  browser in localhost


//link to how deploy react code -> https://www.youtube.com/watch?v=Ey_90l9GaAw&t=569s
//https://blog.logrocket.com/8-ways-deploy-react-app-free/#vercel
//https://jwang6avans.github.io/ChatbotCasper/

//npm run build                     -- follow these commands to deploy/update the website
//git add .
//git commit -m "changes"
//git push                           --push the edit to the netlify through github
//npm run deploy

//git show-ref                       -- show git info
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
      message: "Best Friend is supporting abandoned cats and dogs from being killed in America’s shelters because of the lack of resources. We aim to help every shelter in every community to reach the no-kill benchmark of 90% by 2025.",
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
      message: "Well, I found that you do things very well where you have very much to be proud of. This make you the perfect supporter to assist us!",
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
      message: "This means that 3.5 million cats and dogs were being saved! We need your help more than ever to get across the finish line. I believe you can make our pets smile again because your results show that you are an amazing person with many good qualities.",
      trigger: "13",
    },
    {
      id: "13",
      message: "Interested to find out more about us?",
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
      message: "We work with people who love to save animals. I believe we share a lot of similar traits, based on your personality results. It shows that you are a person of worth and someone who has really much respect for yourself!",
      trigger: "16",
    },
    {
      id: "16",
      message: "Are you interested to find out how you can help us?",
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
      message: "A donation of 50 cents will be enough to help us out! It is clear from the personality results that you really are a positive person. Positive attitudes always are something we can learn from you. Together, we can save more lives and provide loving homes for homeless animals.",
      trigger: "19",
    },
    {
      id: "19",
      message: "Last but not least, I'd like to leave you with my favorite quote. Do you know what it is?",
      trigger: "20",
    },
    {
      id: "20",
      options: [
          { value: 1, label: "Yes", trigger: "21" },
          { value: 2, label: "No", trigger: "21" },
        ],
    },
    {
      id: "21",
      message: "My favorite quote is: What we think, we become.",
      trigger: "22",
    },
    {
      id: "22",
      message: "Thank you! Please close this website and Go back to the survey!",
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
