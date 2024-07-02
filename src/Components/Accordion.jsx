import React, { useState } from 'react';
import './Accordion.css';
import Button from './Button';

const Accordion = ({ items }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter(i => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)} role="button" tabIndex="0">
            {item.title}
            <span className={`accordion-arrow ${activeIndices.includes(index) ? 'active' : ''}`}>
              {activeIndices.includes(index) ? '▲' : '▼'}
            </span>
          </div>
          {activeIndices.includes(index) && (
            <div className={`accordion-content ${activeIndices.includes(index) ? 'active' : ''}`}>
              <p>{item.content}</p>
              {item.button && <Button text={item.button.text} link={item.button.link} className={item.button.className} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;