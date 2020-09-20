import React, { useState,useEffect } from 'react';
import database from './firebase';
import TinderCard from "react-tinder-card";
import './TinderCards.css';
function TinderCards() {
    const [people,setPeople]=useState([
    ]);
    useEffect(() => {
        
        const unsubscribe=database.collection("people")
        .onSnapshot(snapshot=>(setPeople(snapshot.docs.map(doc=>doc.data()))
        ))
        return ()=>{
            unsubscribe();
        };
    },[]);
    
    return (
        
            <div className="tinderCards__cardContainer">
        {people.map((person)=>(
            <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']}> 
             <div className="card" style={{backgroundImage:`url(${person.url})`}}> </div>
             <div className="sidenav">
           <a className="person">NAME: {person.name}</a>
           <a className="skill"> my SKILLS : {person.skills}</a>
           <a className="work">I would like you to HELP me with: {person.work} </a>
         </div> 
            </TinderCard>
            
        ))}
        
        </div>  
        
    );
}

export default TinderCards;
