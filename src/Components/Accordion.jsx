import React, { useState } from 'react';
import './Accordion.css';
import Button from './Button'; // Import the Button component

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            {item.title}
            <span className={`accordion-arrow ${activeIndex === index ? 'active' : ''}`}>
              {activeIndex === index ? '▲' : '▼'}
            </span>
          </div>
          {activeIndex === index && (
            <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
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