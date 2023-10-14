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



const emails = ['Calculus', 'Economics', 'Research Paper', 'Programming'];

const content = [
{
  name: 'Calculus',
  summary: 'A derivative is much easier to take than an integral in my opinion.',
  points: 'Know how to take derivatives\nKnow how to take integrals\nKnow that one is better than the other',
  question: 'Why are you still doing math by hand?',
},
{
  name: 'Economics',
  summary: 'It\'s actually not about money, but rather choices and the economy as a whole.',
  points: 'Know supply\nKnow demand\nKnow that is basically everything',
  question: 'Would you use the word surplus in a real sentence?'
}
]


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [selectedSummary, setSelectedSummary] = useState('');
  const [selectedPoints, setSelectedPoints] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (content) => {
    setSelectedSummary(content.summary);
    setSelectedPoints(content.points);
    setSelectedQuestion(content.question);
  };



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
            </List>
        </div>
        <div className="halfBox">
          <h2>{selectedSummary}</h2>
          <h3>{selectedPoints}</h3>
          <h4>{selectedQuestion}</h4>

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
    <div>
      <Typography variant="subtitle1" component="div">
        {/* Selected: {selectedValue} */}
      </Typography>
      <br />
      <Button onClick={handleClickOpen}>
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