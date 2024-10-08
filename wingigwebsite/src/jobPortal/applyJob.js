import React, { useState } from 'react';
import Modal from 'react-modal';
import { FormControl, TextField, Typography, MenuItem, Grid, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const ApplyJob = ({ applymodal, setapplymodal }) => {
    // const [isModalOpen, setIsModalOpen] = useState(true);
    const [experience, setExperience] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    console.log({ checkbox })

    const handleChange = (event) => {
        setExperience(event.target.value);
    };
    const handleCheckbox = (event) => {
        setCheckbox(event.target.checked)
    }
    return (
        <div>
            {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
            {/* <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}> */}
            <Modal isOpen={applymodal} onRequestClose={() => setapplymodal(false)}>
                <div className='flex'>
                    <div className='bg-white-400 w-2/5 m-0 p-4 h-lvh'>
                        <h1>Apply To :</h1>
                        <div className='flex mt-1'>
                            <img className='w-12 mt-3' src='/logo192.png' alt='Logo' />
                            <h2 className='p-3 mt-3 ml-1 font-bold'>Vidyardi</h2>
                        </div>
                        <br />
                        <ul className='list-none p-0'>
                            <li className='mb-1 font-bold'>Location</li>
                            <p className='mb-2 text-gray-500'>Hyderabad</p>
                            <hr className='bg-black w-3/4' />
                            <br />
                            <li className='mb-1 font-bold'>Job Type</li>
                            <p className='mb-2 text-gray-500'>Full Time</p>
                            <hr className='bg-black w-3/4' />
                            <br />
                            <li className='mb-1 font-bold'>About Your Recruiter</li>
                            <p className='mb-2 w-3/4 text-gray-500'>
                                Erik Nichols
                                <br />
                                Location: San Francisco
                                <br />
                                Title: Recruiting for Eng, Product, & Design
                            </p>
                            <hr className='bg-black w-3/4' />
                            <br />
                            <li className='mb-1 font-bold'>Experience</li>
                            <p className='mb-2 text-gray-500'>0 - 3 years</p>
                            <hr className='bg-black w-3/4' />
                            <br />
                            <li className='mb-1 font-bold'>Salary</li>
                            <p className='mb-1 text-gray-500'>4lkhs - 8 lkhs</p>
                        </ul>
                    </div>

                    <div className='bg-gray-300 w-lvw p-5'>
                        <Typography variant='h5' gutterBottom>
                            Your Application
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            Complete the fields below
                        </Typography>
                        <FormControl fullWidth>
                            <Grid container spacing={2}>
                                {/* Full-width Name Field */}
                                <Grid item xs={12}>
                                    <TextField
                                        label='Name'
                                        variant='outlined'
                                        required
                                        fullWidth
                                        sx={{ mt: 3, height: '50px' }}
                                        InputProps={{ sx: { height: '100%' } }}
                                        InputLabelProps={{ sx: { top: '-2px', fontSize: '0.9rem' } }}
                                    />
                                </Grid>


                                {/* Full-width Email Field */}
                                <Grid item xs={12}>
                                    <TextField
                                        label='Email'
                                        variant='outlined'
                                        required
                                        fullWidth
                                        sx={{ mt: 3, height: '50px' }}
                                        InputProps={{ sx: { height: '100%' } }}
                                        InputLabelProps={{ sx: { top: '-2px', fontSize: '0.9rem' } }}
                                    />
                                </Grid>

                                {/* Side-by-side layout for Location and Experience */}
                                <Grid item xs={6}>
                                    <TextField
                                        label='Your Location'
                                        variant='outlined'
                                        required
                                        fullWidth
                                        sx={{ mt: 3, height: '50px' }}
                                        InputProps={{ sx: { height: '100%' } }}
                                        InputLabelProps={{ sx: { top: '-2px', fontSize: '0.9rem' } }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label='Years Of Experience'
                                            variant='outlined'
                                            required
                                            select
                                            fullWidth
                                            value={experience}
                                            onChange={handleChange}
                                            sx={{ mt: 3, height: '50px' }}
                                            InputProps={{ sx: { height: '100%' } }}
                                            InputLabelProps={{ sx: { top: '-2px', fontSize: '0.9rem' } }}
                                        >
                                            <MenuItem value="< 1">Less than 1 year</MenuItem>
                                            <MenuItem value="1 year">1 year</MenuItem>
                                            <MenuItem value="2 years">2 years</MenuItem>
                                            <MenuItem value="3 years">3 years</MenuItem>
                                            <MenuItem value="10+ years">10+ years</MenuItem>
                                        </TextField>

                                    </FormControl>

                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        label='Desired Salary'
                                        variant='outlined'
                                        required
                                        fullWidth
                                        sx={{ mt: 3, height: '50px' }}
                                        InputProps={{
                                            sx: {
                                                height: '100%',
                                            },
                                            startAdornment: <InputAdornment position='start'><CurrencyRupeeIcon fontSize='small' /></InputAdornment>
                                        }}
                                        InputLabelProps={{ sx: { top: '-2px', fontSize: '0.9rem' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControlLabel label="I'm open to work remotely" control={<Checkbox checked={checkbox} onChange={handleCheckbox} />} sx={{ mt: 2.5 }} />
                                </Grid>
                            </Grid>
                        </FormControl>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ApplyJob;
