import React from 'react';
import './Middle.css';
import inboxdata from './../../inbox.json';
import spamdata from './../../spam.json';

const Middle = () => {


    console.log("data", inboxdata)

    return (
        <div className='Middle_Container'>
            <div className='Middle_Container_top'>
                <div>
                    <a href='#Focused'>Focused </a>
                    <span>Other</span>
                </div>
                <div>
                    <p>Filter</p>
                </div>
            </div>
            <div>
              <p>Inbox </p>
                {inboxdata.map((ele, id) => {
                    return (
                        <div key={id} className='sms_container'>
                            <p>{ele.subject}</p>
                            <p>{ele.content.slice(0,55)}</p>
                            <p>{ele.mId}</p>
                        </div>
                    )
                })}
            </div>
            <div className='spam-text'>
              Spam
              <div>
                {spamdata.map((ele,idx)=>{
                    return(
                        <div key={idx} className='sms_container'>
                            <p>{ele.subject}</p>
                            <p>{ele.content.slice(0,55)}</p>
                            <p>{ele.mId}</p>
                        </div>
                    )
                })}
              </div>
            </div>

        </div>
    )
}

export default Middle;