import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import banerImg from '../images/banerImg.png'
import textBg from '../images/textBg.png'

const TopBanner = () => {

    const [route, setRoute] = React.useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
        setRoute(event.target.value);
    };

    const goToRoute = ()=>{
        navigate(`${route}`)
    }
 

    return (
        <div style={{ backgroundColor: 'rgba(240, 172, 1, 0.05)', marginTop: '65px' }} className='md:flex md:p-0 sm:p-4 justify-around items-center h-screen' >

            {/* text part ------------------------------------------ */}

            <div style={{backgroundImage:`url(${textBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center'  }} className='md:w-2/4 sm:w-full md:p-16 text-left' >
                <h1 className='text-6xl font-black' >Get The Right Course You Deserve</h1><br /><br />
                <p className='md:mr-16 sm:my-5 ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                
                {/* button inside top banner ------------------------ */}
                <div className='' >
                    <div className=' flex sm:my-4 md:my-0 md:w-4/6 sm:w-2/4 ' >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">কোর্স</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={route} label="Age" onChange={handleChange} >
                                <MenuItem value='bcs'>বিসিএস</MenuItem>
                                <MenuItem value='primTeac'>প্রাথমিক শিক্ষক</MenuItem>
                                <MenuItem value='ntrca'>শিক্ষক নিবন্ধন</MenuItem>
                                <MenuItem value='thiredFourthLavel'>৩য় ও ৪র্থ শ্রেণির চাকরি</MenuItem>
                            </Select>
                        </FormControl>

                        <button onClick={ goToRoute } style={{ color: 'white'}} className='border bg-yellow-300 hover:bg-yellow-400 w-40  px-7 ml-2 rounded-md' >শুরু করি</button>
                    </div>
                </div>

            </div>

            {/* image part -------------------------------------------- */}
            <div className='md:w-2/4 sm:w-full h-screen overflow-hidden ' >
                <img src={banerImg} className='' width='100%' alt="topBanner" />
            </div>

        </div>
    );
};

export default TopBanner;