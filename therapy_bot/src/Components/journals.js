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
import { Block } from '@mui/icons-material';
import "./journals.css"
import SummarizeIcon from '@mui/icons-material/Summarize';
import {useState} from 'react';
import { useNavigate } from 'react-router';



const emails = ['Calculus', 'Economics', 'Research Paper', 'Programming'];

const content = [
{
  name: 'Calculus',
  summary: 'A derivative is much easier to take than an integral in my opinion.',
  points: 'Know how to take derivatives,Know how to take integrals,Know that one is better than the other',
  question: 'Why are you still doing math by hand?',
},
{
  name: 'Economics',
  summary: 'It\'s actually not about money, but rather choices and the economy as a whole.',
  points: 'Know supply,Know demand,Know that is basically everything',
  question: 'Would you use the word surplus in a real sentence?'
}
]


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [selectedSummary, setSelectedSummary] = useState('Select a topic to get started viewing your note summaries!');
  const [selectedPoints, setSelectedPoints] = useState('You\'ll have a list of important points from the text\nJust like this!');
  const [selectedQuestion, setSelectedQuestion] = useState('Make sure to head over to the chatbot to discuss concepts you don\'t understand!');
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (content) => {
    setSelectedSummary(content.summary);
    setSelectedPoints(content.points);
    setSelectedQuestion(content.question);
  };

  function NewlineText(props){
    const text = props.text;
    return text.split(',').map(str => <li>{str}</li>);
  }

  // function renderingContent(){
  //   if(selectedPoints !== ' '){
  //     return (
  //       <div className="halfBox">
  //         <h2>Summary: </h2>
  //         <p>{selectedSummary}</p>
  //         <h2>Important Points: </h2>
  //         <ul><NewlineText text={selectedPoints} /></ul>
  //         <h2>Critical Question: </h2>
  //         <p>{selectedQuestion}</p>
  //           <Button variant="contained" onClick={routeChangeQuiz}>Quiz time!</Button>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // }

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
            {content.map((content) => (
            <ListItem disableGutters key={content.name}>
            <ListItemButton onClick={() => handleListItemClick(content)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <SummarizeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={content.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={routeChangeChat}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add topic" />
          </ListItemButton>
        </ListItem>
            </List>
        </div>
        <div className="halfBox">
          <h2>Summary: </h2>
          <p>{selectedSummary}</p>
          <h2>Important Points: </h2>
          <ul><NewlineText text={selectedPoints} /></ul>
          <h2>Critical Question: </h2>
          <p>{selectedQuestion}</p>
            <Button variant="contained" onClick={routeChangeQuiz}>Quiz time!</Button>
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