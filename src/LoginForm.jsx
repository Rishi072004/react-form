import { useState } from 'react'
import './App.css'
import { useNavigate, useLocation } from 'react-router-dom';


function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
  
    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'username':
        if (!value.trim()) error = `${name} is required`;
        break;
  
      case 'email':
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReg.test(value)) error = 'Invalid email address';
        break;
  
      case 'password':
        if (value.length < 6) error = 'Password must be at least 6 characters';
        break;
  
      case 'phoneNumber':
        const phoneReg = /^[0-9]{10}$/;
        if (!phoneReg.test(value)) error = 'Phone number must be 10 digits';
        break;
  
      case 'pan':
        const panReg = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        if (!panReg.test(value)) error = 'Invalid PAN number (e.g., ABCDE1234F)';
        break;
  
      case 'aadhar':
        const aadharReg = /^[2-9]{1}[0-9]{11}$/;
        if (!aadharReg.test(value)) error = 'Invalid Aadhar (must be 12 digits)';
        break;
  
      case 'city':
        if (!value) error = 'City is required';
        break;
  
      default:
        break;
    }
  
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  
  const countryCityMap = {
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal']
  };
  const countryCodeMap ={
    India: ["+91"],
    USA: ["+1"],
    Canada: ["+1"]    
  }
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  showPassword: false,
  countryCode: '',
  phoneNumber: '',
  country: 'India',
  city: '',
  pan: '',
  aadhar: ''
 })

 const isFormComplete = () => {
  const { firstName, lastName, username, email, password, phoneNumber, country, city, pan, aadhar } = formData;
  return (
    firstName.trim() && lastName.trim() && username.trim() &&
    email.trim() &&password.trim() &&
    phoneNumber.trim() &&
    country.trim() &&
    city.trim() &&
    pan.trim() &&
    aadhar.trim()
  );
};


const handleChange  =(e)=>{
  e.preventDefault();
  const {name, value, type, checked} = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox'? checked : value
  })
  validateField(name, value); // live validation
  console.log(formData);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("Form - Data:", formData);
  alert("Form submitted");
  navigate('/submitted', {state : formData})



}


  return (
    <>
    <div className="background-wrapper">
      <div className="bokeh bokeh-1"></div>
      <div className="bokeh bokeh-2"></div>
      <div className="bokeh bokeh-3"></div>
      <div className="bokeh bokeh-4"></div>
      <div className="bokeh bokeh-5"></div>
      <div className="light-beam"></div>
      <div className="texture-overlay"></div>
      
       <div className='form-val'>
        
       <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: 'auto' }}>
      <h2>Registration Form</h2>

      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      {errors.lastName && <p className="error">{errors.lastName}</p>}
      
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      {errors.username && <p className="error">{errors.username}</p>}
      
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
      {errors.email && <p className="error">{errors.email}</p>}

      <div>
        <table className='pass-tab'>
       <th  className='pass'>
        <input 
          name="password"
          type={formData.showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          />
          </th>
          <th>
        <label>
          <input type="checkbox" name="showPassword" checked={formData.showPassword} onChange={handleChange}  />
          Show Password
        </label>
          </th>
          </table>
          {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          {Object.keys(countryCityMap).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        {errors.country && <p className="error">{errors.country}</p>}
      </div>
      <div>
      <table>
     <th className='count-code'>
        <select name="countryCode" value={formData.countryCode} onChange={handleChange} required>
        {countryCodeMap[formData.country].map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
     </th>
     <th className='ph-no'>
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          />
     </th>
      </table>
      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange} required>
          <option value="">Select a city</option>
          {countryCityMap[formData.country].map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <p className="error">{errors.city}</p>}
      </div>

      <input name="pan" value={formData.pan} onChange={handleChange} placeholder="PAN Number" required />
      {errors.pan && <p className="error">{errors.pan}</p>}
      
      <input name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Number" required />
      {errors.aadhar && <p className="error">{errors.aadhar}</p>}
      {isFormComplete() && 
       ( <button type="submit">Submit</button>)}
       
     
    </form>

       </div>
       </div>
    </>
  )
}

export default LoginForm;
