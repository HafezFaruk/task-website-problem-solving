import React, { useState } from 'react';
import Vector from '../images/Vector.png'

const PeopleThoutht = () => {
    

    const pComments = [
        {
            id: '123',
            name: 'Benny Wilson',
            position: 'Cmo Of Educate',
            imgUrl: 'https://i.pinimg.com/originals/29/45/03/294503f2abee73c3f4d78cf6793330c4.jpg',
            comments: 'ipsum dolor sit amet consectetur, adipisicing elit. Harum tempore necessitatibus iste deleniti voluptatum exercitationem veritatis odit temporibus minima eveniet ex voluptatem corporis possimus architecto, suscipit quo maiores aspernatur officiis.'
        },
        {
            id: '124',
            name: 'Sanabil Shaikh',
            position: 'mo Of Educate',
            imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-74fcbf0c146cac99338b96148003218d',
            comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempore necessitatibus iste deleniti voluptatum exercitationem veritatis odit temporibus minima eveniet ex voluptatem corporis possimus architecto, suscipit quo maiores aspernatur officiis.'
        },
        {
            id: '125',
            name: 'Lopakhin Trofimov',
            position: 'Co Of Educate',
            imgUrl: 'https://snworksceo.imgix.net/tsn/78c08ddc-bcca-4cd2-b353-9c1bedc5ab6b.sized-1000x1000.jpg?w=1000',
            comments: 'dolor sit amet consectetur, adipisicing elit. Harum tempore necessitatibus iste deleniti voluptatum exercitationem veritatis odit temporibus minima eveniet ex voluptatem corporis possimus architecto, suscipit quo maiores aspernatur officiis.'
        },
    ]


    const [selecCom, setSelecComm] = useState(pComments[0])

    const peopleComment = ( id ) =>{
        const selectedComm = pComments.find((eachComm)=>{
            return eachComm.id === id;
        })
        setSelecComm(selectedComm)
    }



    return (
        <div style={{marginTop: '120px'}} className='flex pt-4' >

            <div className='' >

                <div>
                    <p className='text-sm' >Testimonials</p>
                    <h1 className='text-md sm:text-3xl font-black' >What Poeple Think <span className='text-yellow-400' >About Our Book</span></h1><br /><br />
                </div>
                
                <div className='sm:flex justify-center sm:items-end' >
                    {/* comment content  */}
                    <div style={{ backgroundImage: `url(${Vector})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                        
                        className=' sm:w-4/6 px-2 sm:px-5 lg:px-24 py-16 shadow-xl shadow-pink-100 rounded flex flex-col justify-center items-center'
                    
                    >
                        <div style={{ height: '84px', width: '84px'}} className='rounded-full overflow-hidden' >
                            <img src={selecCom.imgUrl} width='84px' alt="customers" />
                        </div><br />
                        <p className='w-full' >{selecCom.comments}</p>
                        <br />

                        <h1 className='text-yellow-300 font-black text-xl' >{selecCom.name}</h1>
                        <h3 className=' ' >{selecCom.position}</h3>
                    </div>

                    <div className=' h-full mx-5' >

                        {pComments.map((eachItem)=>(
                            <div key={eachItem.id} onClick={() => { peopleComment(eachItem.id) }}
                                style={{ width: '56px', height: '56px' }}
                                className={`rounded-full overflow-hidden my-2 border-2 ${eachItem.id === selecCom.id && 'border-2 border-yellow-300'}`}
                                // className={`rounded-full overflow-hidden my-2 border-2 ${eachItem.id === selecCom.id && 'border-2 border-yellow-300'}`}
                            >
                            <img src={ eachItem.imgUrl } width='56px' height='56px' alt="customers" />
                        </div>))}

                    </div>

                </div>

                <div className='flex justify-center'>
                    <div style={{ marginTop: '40px' }} className='font-black w-4/6 mr-24 flex items-center justify-end ' >
                        <p>See More <span className='font-black' >&#8594;</span></p>
                    </div>
                </div>

            </div>
  
        </div> 
    );
};

export default PeopleThoutht;