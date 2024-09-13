import React from "react";

interface CardProps{
    children: React.ReactNode
}
interface TitleProps{
    children: React.ReactNode
}

const Card : React.FC<CardProps> & { Title: React.FC<TitleProps> } = ({children})=>{
    return(
        <div className="card-container">
            {children}
        </div>
    )
}


const CardTitle: React.FC<TitleProps> = ({children}) => {
    return <p>{children}</p>;
  };


Card.Title = CardTitle

export default Card

