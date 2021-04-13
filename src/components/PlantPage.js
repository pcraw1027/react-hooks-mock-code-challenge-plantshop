import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState("") 

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantArray) => {
        setPlants(plantArray);
        
      });
      
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants)
  }

  function handleUpdateSearch(newSearch) {
    setSearchPlant(newSearch)
  }


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchPlant} onUpdateSearch={handleUpdateSearch}/>
      <PlantList plants={plants} searchTerm={searchPlant}/>
    </main>
  );
}

export default PlantPage;
