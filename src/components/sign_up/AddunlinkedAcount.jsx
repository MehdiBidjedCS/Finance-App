import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useTheme } from '@mui/material/styles';
import { Select } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export  function BasicTextFields({type}) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label={type} variant="filled" />
    </Box>
  );
}   
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultipleSelectPlaceholder({ accountType, setAccountType }) {
  const theme = useTheme();

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <FormControl className='w-3/4' >
      <Select
        displayEmpty
        value={accountType}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Select a type</em>;
          }
          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Select a type</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, accountType, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function AddunlinkedAcount() {
  const [accountType, setAccountType] = useState(''); // Default empty
  const [nickname, setNickname] = useState('');
  const [balance, setBalance] = useState('');
  const [isNextEnabled, setIsNextEnabled] = useState(false); // State for button color

  useEffect(() => {
    // If all fields are filled, enable the button and change its color
    if (nickname !== '' && accountType !== '' && balance !== '') {
      setIsNextEnabled(true);
    } else {
      setIsNextEnabled(false);
    }
  }, [nickname, accountType, balance]);

  const text = "got it! And don't worry --if you change your mind, you can link your account at any time.";

  return (
    <div className="w-full h-full z-10 absolute grid">
      <div className="place-self-center w-[25vw] h-[90vh] flex flex-col justify-start items-center border-black border-2 rounded-[20px]">
        <div className="flex items-center justify-between w-full h-1/6 text-black rounded-[20px] p-5">
          <IoIosArrowBack className="mr-4 w-5 h-5 text-purple-600 cursor-pointer" />
          <h2 className="text-xl font-semibold flex-grow text-center">Add Unlinked Account</h2>
          <FaTimes className="ml-4 w-5 h-5 text-purple-600 cursor-pointer" />
        </div>
        <div className="w-full p-2 text-sm align-center">
          <span className="font-bold">Let's </span>
          {text}
        </div>
        <div className="flex flex-col items-start w-full gap-[10px] ml-5">
          {/* inputs */}
          <label htmlFor="account-type" className="font-bold">Give it a nickname</label>
          
          <BasicTextFields type="Nickname"/>
          <label htmlFor="account-type" className="font-bold">What type of account are you adding?</label>
          <MultipleSelectPlaceholder accountType={accountType} setAccountType={setAccountType} />
          <label htmlFor="balance" className="font-bold">What is your current account balance?</label>
          <BasicTextFields type="Account balance"/>
        </div>
        <div className="w-full flex justify-center items-center h-1/5">
          {/* Change the color of the button based on isNextEnabled */}
          <button
            className={`w-4/5 h-3/4 rounded-[15px] ${
              isNextEnabled ? 'bg-green-900' : 'bg-gray-300'
            }`}
            disabled={!isNextEnabled} // Disable the button if not all info is filled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddunlinkedAcount;
