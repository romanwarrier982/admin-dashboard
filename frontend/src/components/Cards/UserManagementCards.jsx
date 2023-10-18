import React from "react";
import "./Cards.css";
import { userManagement } from "../../Data/Data";

import Card from "../Card/Card";

const UserManagementCards = () => {
  return (
    <div className="Cards">
      {userManagement.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserManagementCards;
