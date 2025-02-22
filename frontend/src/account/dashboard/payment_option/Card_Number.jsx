import React from 'react'

const Card_Number = ({cardNumber}) => {
  const maskedNumber = cardNumber
  .split('')
  .map((char, index, arr) => {
    if (char === ' ') {
      return ' ';
    }
    if (index < arr.length - 4) {
      return '*';
    }
    return char;
  })
  .join('');

return (
  <div className="font-mono text-lg">
    {maskedNumber}
  </div>
);
}

export default Card_Number