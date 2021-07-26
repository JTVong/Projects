import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
  return (
    <div>
        {robots.map(({id, name, username, email}, index) => (
            <Card
                key = {index}
                id = {id}
                name = {name}
                username = {username}
                email = {email}
            />
        ))}
    </div>
  );
}
export default CardList;
