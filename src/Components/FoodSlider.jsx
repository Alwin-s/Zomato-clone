import React, { useEffect, useState } from 'react';

function FoodSlider() {
  const [slider, setSlider] = useState([]);
  const base_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const fetchData = async () => {
    try {
      const response = await fetch(base_url);
      const data = await response.json();
      setSlider(data.categories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ overflowX: "scroll"}}>
      <div style={{ display: "flex"}}>
        {slider.map((item) => (
          <div key={item.idCategory} className=' mt-4 sliderColor'>
            <img src={item.strCategoryThumb} alt={item.strCategory} style={{height:"150px",width:"180px",cursor:"pointer"}} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSlider;
