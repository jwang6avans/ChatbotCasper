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
      delay: 4000,
      message: "Hi, I'm Casper and I am a virtual agent! I work at Best Friend Animal Society in America.",
      trigger: "4",
    },
     {
      id: "4",
      delay: 5000,
      message: "In this conversation, I'd like to discuss your personality result whilst I'm introducing the charity to you.",
      trigger: "5",
    },
    {
      id: "5",
      delay: 5000,
      message: "Have you ever heard about Best Friend?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
          { value: 1, label: "Yes", trigger: "7" },
          { value: 2, label: "No", trigger: "7" },
        ],
    },
    {
      id: "7",
      delay: 5000,
      message: "Best Friend is supporting abandoned cats and dogs from being killed in America’s shelters because of the lack of resources.",
      trigger: "8",
    },
    {
      id: "8",
      delay: 5000,
      message: "The charity started to create sanctuary for animals who are homeless and need special help.",
      trigger: "9",
    },
    {
      id: "9",
      delay: 5000,
      message: "Today, we came closer to our goal together with our network partners and pet lifesaving centers.",
      trigger: "10",
    },
    {
      id: "10",
      delay: 5000,
      message: "Are you interested to know what we aim for?",
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
      delay: 5000,
      message: "Each day, 951 animals on average are being killed in America shelters.",
      trigger: "13",
    },
    {
      id: "13",
      delay: 5000,
      message: "Since 2016, we declare to change this by given help to every shelter in every community to reach the no-kill benchmark of 90% by 2025.",
      trigger: "14",
    },
    {
      id: "14",
      delay: 5000,
      message: "We have made incredible process in the last 5 years. ",
      trigger: "15",
    },
    {
      id: "15",
      delay: 9000,
      message: "Do you want to know what I've found from your personality test?",
      trigger: "16",
    },
    {
      id: "16",
      options: [
          { value: 1, label: "Yes", trigger: "17" },
          { value: 2, label: "No", trigger: "17" },
        ],
    },
    {
      id: "17",
      delay: 5000,
      message: "Well, your personality scores shows that you have very much to be proud of, and that you are very competent.",
      trigger: "18",
    },
    {
      id: "18",
      delay: 5000,
      message: "You share a lot of similar traits with many of our supporters.",
      trigger: "19",
    },
    {
      id: "19",
      delay: 5000,
      message: "We love and respect to work with people with love and seek to spread positivity to all living being.",
      trigger: "20",
    },
    {
      id: "20",
      delay: 5000,
      message: "Are you interested to know how much progress we made this year?",
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
      delay: 5000,
      message: "This year, 48% of the 4404 shelters in U.S. have achieved a save rate of 90% or more.",
      trigger: "23",
    },
    {
      id: "23",
      delay: 5000,
      message: "This means that 3.5 million cats and dogs have been saved!",
      trigger: "24",
    },
    {
      id: "24",
      delay: 5000,
      message: "Interested to find out more about us?",
      trigger: "25",
    },
    {
      id: "25",
      options: [
          { value: 1, label: "Yes", trigger: "26" },
          { value: 2, label: "No", trigger: "26" },
        ],
    },
    {
      id: "26",
      delay: 5000,
      message: "85% of our supporters show with their personality test results that they are an great person with many good qualities just like you.",
      trigger: "27",
    },
    {
      id: "27",
      delay: 5000,
      message: "Therefore, we need your help more than ever to get across the finish line.",
      trigger: "28",
    },
    {
      id: "28",
      delay: 5000,
      message: "Are you interested to find out how you can help us?",
      trigger: "29",
    },
    {
      id: "29",
      options: [
          { value: 1, label: "Yes", trigger: "30" },
          { value: 2, label: "No", trigger: "30" },
        ],
    },
    {
      id: "30",
      delay: 5000,
      message: "A donation of 50 cents will be enough to help us out!",
      trigger: "31",
    },
    {
      id: "31",
      delay: 5000,
      message: "It is clear from the personality test results that you really are a positive person.",
      trigger: "32",
    },
    {
      id: "32",
      delay: 5000,
      message: "Positive attitudes always are something that we want to share with the world. ",
      trigger: "33",
    },
    {
      id: "33",
      delay: 5000,
      message: "Together, we can save more lives and provide loving homes for homeless animals.",
      trigger: "34",
    },
    {
      id: "34",
      delay: 5000,
      message: "Last but not least, I'd like to leave you with my favorite quote. Do you know what it is?",
      trigger: "35",
    },
    {
      id: "35",
      options: [
          { value: 1, label: "Yes", trigger: "36" },
          { value: 2, label: "No", trigger: "36" },
        ],
    },
    {
      id: "36",
      delay: 5000,
      message: "My favorite quote is: What we think, we become.",
      trigger: "37",
    },
    {
      id: "37",
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
