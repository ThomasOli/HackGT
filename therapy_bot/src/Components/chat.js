import { useState , useEffect} from 'react'
import './chat.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

const waiting = ["Hoot is flapping his feathers", "Hoot is thinking", "Hoot is pondering", "Hoot is deliberating", "Hoot is meditating","Hoot is musing", "Hoot is ruminating","Hoot is cogitating","Hoot is reflecting", "Hoot is considering", "Hoot is contemplating", "Hoot is analyzing", "Hoot is processing", "Hoot is evaluating", "Hoot is scheming", "Hoot is strategizing","Hoot is brainstorming", "Hoot is daydreaming", "Hoot is deep in thought","Hoot is lost in thought"]
const placeholders = [
    "Type a message...",
    "Explain the Pythagorean theorem.",
    "What is the difference between HTML and CSS?",
    "Tell me about the events leading up to World War II.",
    "Discuss the impact of climate change on polar ice caps.",
    "Discuss the influence of the Renaissance on art and culture.",
    "Explain the use of metaphors in poetry.",
    "Explain the elements of classical architecture.",
    "How do different cultures celebrate traditional festivals?",
    "What are the key features of impressionist painting?",
    "What is the concept of entropy in thermodynamics?",
    "How does photosynthesis work in plants?",
    "Teach me about Newton's laws of motion.",
    "Teach me about the structure of a sonnet.",
    "Discuss the impact of Shakespeare's works on literature.",
    "Tell me about the history of the English language.",
    "What are the characteristics of a well-written novel?",
    "What are the properties of the periodic table group elements?",
    "Explain the benefits of a balanced diet.",
    "How can I improve my mental health and well-being?",
    "How can we reduce plastic waste in the oceans?",
    "Tell me about sustainable agriculture practices.",
    "What is the importance of biodiversity in conservation?",
    "Discuss the history of ancient Egypt.",
    "What is the geography of the African continent?",
    "Tell me about the major explorations during the Age of Discovery.",
    "Explain the concept of object-oriented programming.",
    "Tell me about the history of the internet.",
    "How do artificial neural networks work in machine learning?",
    "What are the latest trends in cybersecurity?"
];
function Chat() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const[waitingIndex, setwaitingIndex] = useState(0);
  const [messages, setMessages] = useState([
    {
      message: "Hoo Hoo, I'm Hoot! Ask me anything! Tell me your grade level!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    if (isTyping) {
       setwaitingIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
      // Increment the placeholder index, wrapping around if needed
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }
  }, [isTyping]);
  
  const getWaitingIndex = () => {
    return waiting[waitingIndex];
  };
  const getNextPlaceholder = () => {
    return placeholders[placeholderIndex];
  };
  const currentWaiting = getWaitingIndex();
  const currentPlaceholder = getNextPlaceholder();
  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
    
  };

  async function processMessageToChatGPT(chatMessages) { 
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="Chat">
      <div style={{ display: 'flex', flexDirection: 'column', height: '85vh' }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content={currentWaiting} /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
              <MessageInput placeholder={currentPlaceholder} onSend={handleSend} />             
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat