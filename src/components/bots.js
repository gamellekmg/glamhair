import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Steps for the chatbot
const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'View Glamhair Services' },
      { value: 2, label: 'View Glamhair sales' },
      { value: 3, label: 'Watch tutorials' },
      { value: 4, label: 'Talk to an agent' },
    ],
    end: true,
  },
];

// Theme for the chatbot
const theme = {
  background: '#eee',
  headerBgColor: 'gray',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: 'Darkgray',
  userFontColor: 'white',
};

// Configuration for the chatbot
const config = {
  botAvatar: '/images/4712109.png',
  floating: true,
};

function Bots() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="GlamhairBot"
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
}

export default Bots;
