 import React, { useState,useEffect } from 'react';
 import { ReactDOM } from 'react-dom';
 import { Card,CardBody,Container,Button,Col,Row } from 'react-bootstrap-v5';
 import profile1 from './images/profile.jpg';

 const Twittersearch = () => { 
    const [count, setCount] = useState(0);    
    var maxcount = 30; 
    
        React.useEffect(() => { 
            const myInterval = setInterval(() => {
                console.log('myInterval ........');
                if (maxcount > 0) {
                    maxcount = maxcount-1;
                    console.log(maxcount);
                    setCount(maxcount);
                }
                else{
                    setTimeout(function(){
                        maxcount = 30;
                    }, 2000);
                }
            }, 1000);
            
            if(maxcount === 0) {
                console.log('Clear Interval' + maxcount);
                clearInterval(myInterval);
            }
        }, []);

    
     return (
         <>   
            <section className='main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col d-flex flex-row'>
                            <p>Search @ Twitter</p>
                        </div>
                        <div className='col d-flex flex-row-reverse'>
                            <p>Auto refresh in {count} seconds</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='container'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn" type="button">Search</button>
                    </div>
                </div>
                <div className='container containerList'>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <div className="card mb-3 d-flex flex-row p-2 shadow-sm">
                                <div className="profileimg d-flex flex-wrap align-content-center">
                                    <div className='bxprofile'>
                                        <img src={profile1} className="img-fluid rounded" alt="..." />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-horizontal text-muted">
                                        <li className="list-group">harri beobide</li>
                                        <li className="list-group">@hbeobide</li>
                                        <li className="list-group">thu jul 24 15:34:48 + 0000 2018</li>
                                    </ul>
                                    <p className="card-text">RT @txurtu: bene benetako zientzialariak! https://t.co/olnBvvBVOD</p>
                                </div>
                            </div>
                        </li>
                        <li className='list-group-item'>
                            <div className="card mb-3 d-flex flex-row p-2 shadow-sm">
                                <div className="profileimg d-flex flex-wrap align-content-center">
                                    <div className='bxprofile'>
                                        <img src={profile1} className="img-fluid rounded" alt="..." />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-horizontal text-muted">
                                        <li className="list-group">harri beobide</li>
                                        <li className="list-group">@hbeobide</li>
                                        <li className="list-group">thu jul 24 15:34:48 + 0000 2018</li>
                                    </ul>
                                    <p className="card-text">RT @txurtu: bene benetako zientzialariak! https://t.co/olnBvvBVOD</p>
                                </div>
                            </div>
                        </li>
                        <li className='list-group-item'>
                            <div className="card mb-3 d-flex flex-row p-2 shadow-sm">
                                <div className="profileimg d-flex flex-wrap align-content-center">
                                    <div className='bxprofile'>
                                        <img src={profile1} className="img-fluid rounded" alt="..." />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-horizontal text-muted">
                                        <li className="list-group">harri beobide</li>
                                        <li className="list-group">@hbeobide</li>
                                        <li className="list-group">thu jul 24 15:34:48 + 0000 2018</li>
                                    </ul>
                                    <p className="card-text">RT @txurtu: bene benetako zientzialariak! https://t.co/olnBvvBVOD</p>
                                </div>
                            </div>
                        </li>
                        <li className='list-group-item'>
                            <div className="card mb-3 d-flex flex-row p-2 shadow-sm">
                                <div className="profileimg d-flex flex-wrap align-content-center">
                                    <div className='bxprofile'>
                                        <img src={profile1} className="img-fluid rounded" alt="..." />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-horizontal text-muted">
                                        <li className="list-group">harri beobide</li>
                                        <li className="list-group">@hbeobide</li>
                                        <li className="list-group">thu jul 24 15:34:48 + 0000 2018</li>
                                    </ul>
                                    <p className="card-text">RT @txurtu: bene benetako zientzialariak! https://t.co/olnBvvBVOD</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
         </>
     );
 }

 export default Twittersearch;