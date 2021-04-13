import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: name,
      image: image,
      price: parseFloat(price),
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newPlant) => {
      onAddPlant(newPlant);
    });
  }

  return (
    <div onSubmit={handleSubmit} className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
          type="text" 
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)} 
          placeholder="Plant name" 
        />
        <input 
          type="text" 
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)} 
          placeholder="Image URL" 
        />
        <input 
          type="number" 
          name="price"
          value={price} 
          onChange={(event) => setPrice(event.target.value)} 
          step="0.01" 
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
