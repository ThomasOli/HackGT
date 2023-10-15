import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Book from './Images/book.png';
import { Block, SettingsRemoteSharp } from '@mui/icons-material';
import "./journals.css"
import SummarizeIcon from '@mui/icons-material/Summarize';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { findAll } from '../journal.mjs';




const emails = ['Calculus', 'Economics', 'Research Paper', 'Programming'];

const content = [
{
  name: 'Law of Supply and Demand',
  summary: 'The article explains the fundamental economic principle known as the law of supply and demand. This law describes the relationship between the price of a resource, commodity, or product and its supply and demand. When the price of a product rises, its supply increases, while demand decreases. Conversely, when the price drops, supply decreases, and demand rises. The article also discusses how the interactions between supply, demand, and price are represented on supply and demand curves, leading to a market-clearing price where demand equals supply.',
  points: 'The law of demand states that as the price of a product rises, its demand decreases, and vice versa.;The law of supply asserts that higher prices lead to an increase in the supply of a product, while lower prices reduce supply.;Supply and demand are graphically represented on supply and demand curves.;The equilibrium or market-clearing price is where supply equals demand.;The price elasticity of a product determines how changes in price affect demand and supply.;External factors like taxes, government regulations, and economic cycles can impact supply and demand curves.',
  question: 'How does the law of supply and demand impact pricing and the allocation of resources in a market economy, and what factors influence the elasticity of supply and demand for various products?',
},
{
  name: 'Deaf Culture and American Sign Language',
  summary: 'This article discusses Deaf culture, the diversity within Deaf communities, and the unique aspects of Deaf identity. It highlights the difference between cultural Deafness and being deaf, as well as the concept of "Deaf Gain." Sign language is a central element of Deaf culture, and various sign languages, like American Sign Language (ASL), are fully realized languages with distinct grammar and vocabulary. The article also delves into the history of deaf education, the challenges faced by deaf individuals in literacy, and the controversy surrounding cochlear implants. Deaf etiquette and shared behaviors within the Deaf community are also explored.',
  points: 'Deaf culture is a diverse and rich culture influenced by deafness, and it encompasses a set of beliefs, practices, and traditions.;Not all deaf individuals belong to or participate in Deaf culture, and people can become culturally Deaf at different points in their lives.;"Deaf Gain" refers to the benefits and unique perspectives of being Deaf, emphasizing the contributions of the Deaf community to the world.;Sign languages, like ASL, have their own grammar and vocabulary and are not related to spoken languages.;The history of deaf education includes a shift from sign language to oralist approaches, which had negative effects on deaf children\'s development.;There is a literacy gap among deaf individuals due to the challenge of reading in a language (English) that is not their first language.;The use of cochlear implants is a controversial topic within the Deaf community, with varying perspectives on their impact.;The article provides tips on Deaf etiquette, including how to interact with Deaf individuals and respect their cultural norms.',
  question: 'What are some key benefits and unique perspectives that Deaf individuals, as part of the Deaf community, bring to society, as highlighted by the concept of "Deaf Gain"?'
}
]


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [selectedSummary, setSelectedSummary] = useState('Select a topic to get started viewing your note summaries!');
  const [selectedPoints, setSelectedPoints] = useState('You\'ll have a list of important points from the text;Just like this!');
  const [selectedQuestion, setSelectedQuestion] = useState('Did you head over to the chatbot to discuss concepts you don\'t understand?');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false)
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (notes) => {
    setSelectedSummary(notes.summary);
    setSelectedPoints(notes.points);
    setSelectedQuestion(notes.question);
  };

  function NewlineText(props){
    const text = props.text;
    return text.split(';').map(str => <li>{str}</li>);
  }

  // const fetchData = async () => {
  //   setLoading(true)

  //   const res = await findAll()

  //   setNotes([...res])
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  let navigate = useNavigate();

  const routeChangeChat = () =>{
    let path = `/chat`;
    navigate(path);
  }

  const routeChangeQuiz = () =>{
    let path = `/quiz`;
    navigate(path);
  }


  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='xlg' style={{display: 'block'}}>
      <div>
        <div className='halfBox'>
          <h1>Topics:</h1>
        </div>
        <div className='halfBox'>
          <h1>Notes:</h1>
        </div>
      </div>
      <div style={{marginLeft: '40px'}}>  
        <div className="halfBox">
            
            <List sx={{ pt: 0 }}>
            {content.map((notes) => (
            <ListItem disableGutters key={notes.name}>
            <ListItemButton onClick={() => handleListItemClick(notes)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#40255b', color: '#ffffff'}}>
                  <SummarizeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={notes.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={routeChangeChat}
          >
            <ListItemAvatar>
              <Avatar sx={{bgcolor: '#40255b78', color: '#ffffff'}}>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Discuss a topic/Get something summarized" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => setTextFieldVisibility(true)}
          >
            <ListItemAvatar>
              <Avatar sx={{bgcolor: '#40255b78', color: '#ffffff'}}>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add notes" />
          </ListItemButton>
          {isTextFieldVisible ? (
            <input type="text" placeholder="enter text" />
          ) : null}
        </ListItem> */}
            </List>
        </div>
        <div className="halfBox">
          <h2>Summary: </h2>
          <p>{selectedSummary}</p>
          <h2>Important Points: </h2>
          <ul><NewlineText text={selectedPoints} /></ul>
          <h2>Critical Question: </h2>
          <p style={{fontSize: "16px"}}>{selectedQuestion}</p>
          <br />
            <Button variant="contained" onClick={routeChangeQuiz} sx={{bgcolor: '#40255b'}}>Quiz time!</Button>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };



  return (
    <div className="bookClass">
      <Button onClick={handleClickOpen} className="buttonBook">
        <img src={Book} />
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}


// import React from 'react';
// import './journals.css';

// const journals = () => {
//     return (
//         // <div className='table'>
//         //     <table>
//         //         <tr>
//         //             <th>Name</th>
//         //             <th>Age</th>
//         //             <th>Response</th>
//         //         </tr>
//         //         <tr>
//         //             <td>Jamie</td>
//         //             <td>19</td>
//         //             <td>I am sad</td>
//         //         </tr>
//         //         <tr>
//         //             <td>Craig</td>
//         //             <td>19</td>
//         //             <td>Draw using leap</td>
//         //         </tr>
//         //         <tr>
//         //             <td>Bill</td>
//         //             <td>25</td>
//         //             <td>Hello world</td>
//         //         </tr>
//         //     </table>
//         // </div>

        
//     );
// }

// export default journals;

{emails.map((email) => (
  <ListItem disableGutters key={email}>
    {/* <ListItemButton onClick={() => handleListItemClick(email)}> */}
    <ListItemButton>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
          <SummarizeIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={email} />
    </ListItemButton>
  </ListItem>
))}
<ListItem disableGutters>
  <ListItemButton
    autoFocus
    // onClick={() => handleListItemClick('addAccount')}
  >
    <ListItemAvatar>
      <Avatar>
        <AddIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Add topic" />
  </ListItemButton>
</ListItem>