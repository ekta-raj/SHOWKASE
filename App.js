import React, { useState } from 'react';
import './App.css';
import BuyerPurposePopup from './BuyerPurposePopup';
import ImageUploader from './ImageUploader';
import PopupModal from './PopupModal';

function App() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [subOption, setSubOption] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [buyerPurposePopupOpen, setBuyerPurposePopupOpen] = useState(false);
  const [buyerPurpose, setBuyerPurpose] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [sqFootValue, setSqFootValue] = useState('');


  const handleOptionSelect = (option) => {
    console.log(option)
    setSelectedOption(option);
    setStep(2); // Move to step 2 when an option is selected
  };

  const handleMoveForward = () => {
    if (selectedOption === 'Property Type') {
      console.log('move forward')
      if (subOption) {
        console.log('here now')
        setStep(3);
      } else {
        alert('Please select a sub-option.');
      }
    } else {
      setStep(3);
    }
  };

  const handleSubOptionSelect = (option) => {
    setSubOption(option);
    setStep(2);
  };


  const handleBuyerSelect = () => {
    setSelectedOption('buyer');
    setStep(3);
  };

  const handleInsuranceAgentSelect = () => {
    setSelectedOption('insurance_agent');
    setStep(3);
  }
  
  const handleBuyerPurposeSelect = (purpose) => {
    setBuyerPurpose(purpose);
    setBuyerPurposePopupOpen(false);
    setPopupContent(`You submitted as a Buyer with purpose: ${purpose}`);
    setPopupOpen(true);
  };
 

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <div className="banner">
        <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className="wrapper">
          {step === 1 && (
            <div>
              <button className="button" onClick={() => handleOptionSelect('Property Type')}>WHAT KIND OF PROPERTY DO YOU WANT</button>
              <ImageUploader onUpload={() => {}} />
            </div>
          )}
          
          {step === 2 && (
            <div className="property-buttons">
              {selectedOption === 'Property Type' && (
                <div>
                  <button className="sub-option-button" onClick={() => handleSubOptionSelect('Bedrooms')}>Bedrooms</button>
                  <button className="sub-option-button" onClick={() => handleSubOptionSelect('Bathrooms')}>Bathrooms</button>
                  <button className="sub-option-button" onClick={() => handleSubOptionSelect('State')}>State</button>
                  <button className="sub-option-button" onClick={() => handleSubOptionSelect('City')}>City</button>
                  <button className="sub-option-button" onClick={() => handleSubOptionSelect('Price')}>Price</button>
                  <button className="sub-option-button" onClick={() => handleSubOptionSelect('Sq. Foot')}>Sq. Foot</button>
                </div>
              )}
              {subOption === 'Bedrooms' && (
                <div>
                  <select value={subOption} onChange={(e) => handleSubOptionSelect(e.target.value)}>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  </select>
                </div>
              )}
              {subOption === 'Bathrooms' && (
                <div>
                  <select value={subOption} onChange={(e) => handleSubOptionSelect(e.target.value)}>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  </select>
                </div>
              )}
              {subOption === 'State' && (
                <div>
                  <select value={subOption} onChange={(e) => handleSubOptionSelect(e.target.value)}>
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="DC">District of Columbia</option>
                    <option value="AS">American Samoa</option>
                    <option value="GU">Guam</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                  </select>
                </div>
              )}
              {subOption === 'City' && (
                <div>
                  <input type="text" placeholder="Enter city name" value={cityValue} onChange={(e) => setCityValue(e.target.value)} />  
                </div>
              )}
              {subOption === 'Price' && (
                <div>
                  <input type="number" min="50000" max="5000000" placeholder="The price entered will be in thousands" value={priceValue} onChange={(e) => setPriceValue(e.target.value)} />
                </div>
              )}
              {subOption === 'Sq. Foot' && (
                <div>
                  <input type="number" min="700" max="3000" placeholder="Enter square footage" value={sqFootValue} onChange={(e) => setSqFootValue(e.target.value)} />
                </div>
              )}
              <button className="button" onClick={handleMoveForward}>Move Forward</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div>
                <button className="button" onClick={() => setBuyerPurposePopupOpen(true)}>Buyer</button>
              </div>
              <div>
                <button className="button" onClick={() => handleInsuranceAgentSelect()}>Insurance Agent</button>
              </div>
              {selectedOption === 'buyer' && (
                <div>
                  <button className="button" onClick={() => setBuyerPurposePopupOpen(true)}>Buyer</button>
                </div>
              )}
              {/* {selectedOption === 'insurance_agent' && (
                <div>
                  <button className="button" onClick={() => handleInsuranceAgentSelect()}>Insurance Agent</button>
                </div>
              )} */}
            </div>
          )}
        </div>
      </div>
      {/* Purpose selection popup */}
      <BuyerPurposePopup
        isOpen={buyerPurposePopupOpen}
        onClose={() => setBuyerPurposePopupOpen(false)}
        onPurposeSelect={handleBuyerPurposeSelect}
      />
      {/* Main popup */}
      <PopupModal isOpen={popupOpen} onClose={handleClosePopup} title="Your Title" content={popupContent} renovationCost="Based on your choice, we have found the following property for you." buyerPurpose={buyerPurpose} />
    </div>
  );
}

export default App;