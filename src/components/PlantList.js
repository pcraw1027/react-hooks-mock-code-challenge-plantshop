import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm}) {
  
  const filteredPlants = plants.filter((plantObj) => {
    return plantObj.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const plantElement = filteredPlants.map((plant) => {
    // console.log(plant)
    return (
    <PlantCard 
      key={plant.id}
      img={plant.image}
      name={plant.name}
      price={plant.price} 
      />
    )
});
  console.log(plants)
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantElement}
      
     

    </ul>
  );
}

export default PlantList;
