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
      delay: 2000,
      message: "Hi, I'm Casper and I am a virtual agent! I work at Best Friend Animal Society in America. In this conversation, I'd like to discuss your personality result whilst I'm introducing the charity to you. ",
      trigger: "4",
    },
    {
      id: "4",
      delay: 5000,
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
      delay: 4000,
      message: "Best Friend is supporting abandoned cats and dogs from being killed in America’s shelters because of the lack of resources. The charity started to create sanctuary for animals who are homeless and need special help. Today, we came closer to our goal together with our network partners and pet lifesaving centers. ",
      trigger: "7",
    },
    {
      id: "7",
      delay: 9000,
      message: "Are you interested to know what we aim for?",
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
      delay: 4000,
      message: "Each day, 951 animals on average are being killed in America shelters. Since 2016, we declare to change this by given help to every shelter in every community to reach the no-kill benchmark of 90% by 2025. We have made incredible process in the last 5 years. ",
      trigger: "10",
    },
    {
      id: "10",
      delay: 9000,
      message: "Do you want to know what I've found from your personality test?",
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
      delay: 4000,
      message: "Well, your personality scores shows that you have very much to be proud of, and that you are very competent. The majority of our supporters have similar result. We love to work with people love and kindness to all living being.",
      trigger: "13",
    },
    {
      id: "13",
      delay: 9000,
      message: "Are you interested to know how much progress we made this year?",
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
      delay: 4000,
      message: "This year, 48% of the 4404 shelters in U.S. have achieved a save rate of 90% or more. This means that 3.5 million cats and dogs have been saved! 85% of our supporters show with their personality test results that they are an great person with many good qualities just like you. Therefore, we need your help more than ever to get across the finish line.",
      trigger: "16",
    },
    {
      id: "16",
      delay: 9000,
      message: "Interested to find out more about us?",
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
      delay: 4000,
      message: "We work with people who love to save animals. We respect one another and operate with love and seek to spread positivity. I believe we share a lot of similar traits. Your personality test results reveals that you are a person of worth and someone who has really much respect for yourself!",
      trigger: "19",
    },
    {
      id: "19",
      delay: 9000,
      message: "Are you interested to find out how you can help us?",
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
      delay: 4000,
      message: "A donation of 50 cents will be enough to help us out! It is clear from the personality test results that you really are a positive person. Positive attitudes always are something that we want to share with the world. Together, we can save more lives and provide loving homes for homeless animals.",
      trigger: "22",
    },
    {
      id: "22",
      delay: 9000,
      message: "Last but not least, I'd like to leave you with my favorite quote. Do you know what it is?",
      trigger: "23",
    },
    {
      id: "23",
      options: [
          { value: 1, label: "Yes", trigger: "24" },
          { value: 2, label: "No", trigger: "24" },
        ],
    },
    {
      id: "24",
      delay: 4000,
      message: "My favorite quote is: What we think, we become.",
      trigger: "25",
    },
    {
      id: "25",
      message: "Thank you! Please close this website and go back to the survey!",
      end:true,

    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot headerTitle="Chatbot Casper" ChatBot steps={steps} floating={true}/>
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
