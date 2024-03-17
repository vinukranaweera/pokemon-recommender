import React, { useState } from 'react';
import Info from '../image/informationButton.png';

const InfoButton = ({ className }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const buttonStyle = {
    position: 'fixed',
    top: '20px', 
    right: '20px', 
    zIndex: '999', 
  };

  const messageStyle = {
    position: 'fixed',
    top: '20px', 
    right: '80px', 
    zIndex: '999', 
  };

  const handleClick = () => {
    setShowInstructions((prev) => !prev); 
  };

  return (
    <div>
      <button 
        className={`hover:invert hover:sepia hover:saturate hover:hue-rotate hover:brightness hover:contrast ${className}`} 
        style={buttonStyle} 
        onClick={handleClick}
      >
        <img 
          src={Info} 
          className="transition-transform duration-300 transform-gpu hover:scale-110" 
          alt="Info" 
        />
      </button>
      {showInstructions && (
        <div style={messageStyle} className="bg-neutral-100/90 w-[400px] h-[530px] p-4 mt-2 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-2">Instructions:</h2>
          <ul style={{ listStyle: 'square' } } className='p-2'>
            <li>Enter a Pokémon name or ID in the search bar.</li>
            <li>Alternatively, select a type from the dropdown menu to search by type.</li>
            <li>Press the search button and click a card to place them in your team.</li>
            <li>Once you obtain your desired team, click the Pokéball to retrieve their optimal matchups.
                Click the Pokéball again to reroll or change your team either by removing a card with the red X or
                by searching for another Pokémon. Enjoy!
            </li>
          </ul>
          <h2 className="text-lg font-bold mb-2">Important Notes:</h2>
          <ul style={{ listStyle: 'square' } } className='p-2'>
            <li>The application currently contains Pokémon from Generation I to Generation VIII.</li>
            <li>Names with more than one word are hyphenated. Use the suffixes "-mega", "-alola", and "-galar" for the different forms.</li>
            <li>Refer to the <a href='https://docs.google.com/spreadsheets/d/192_bt2hWN0EmjZ-yfqGk1JD213AFb784kEQgXGY-egM/edit?usp=sharing' target="_blank" className='text-blue-600 underline-offset-2'>file</a> for more documentation of the names/id of Pokémon.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoButton;




