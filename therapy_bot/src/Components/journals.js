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
import HTMLFlipBook from 'react-pageflip';



const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const Page = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
  });

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='xlg'>
        
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
      <div>
        <HTMLFlipBook width={300} height={500}>
            <Page number="1">Page text 1</Page>
            <Page number="2">Page text 2</Page>
            <Page number="3">Page text 3</Page>
            <Page number="4">Page text</Page>
        </HTMLFlipBook>
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