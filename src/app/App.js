import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="panel pricing-table">
        <div className="pricing-plan">
          <img src="media/icon1.png" alt="" className="pricing-img" />
          <h2 className="pricing-header">Personal</h2>
          <ul className="pricing-features">
            <li className="pricing-features-item">Custom domains</li>
            <li className="pricing-features-item">
              Sleeps after 30 mins of inactivity
            </li>
          </ul>
          <span className="pricing-price">Free</span>
          <a href="#/" className="pricing-button">
            Sign up
          </a>
        </div>

        <div className="pricing-plan">
          <img src="media/icon2.png" alt="" className="pricing-img" />
          <h2 className="pricing-header">Small team</h2>
          <ul className="pricing-features">
            <li className="pricing-features-item">Never sleeps</li>
            <li className="pricing-features-item">
              Multiple workers for more powerful apps
            </li>
          </ul>
          <span className="pricing-price">$150</span>
          <a href="#/" className="pricing-button is-featured">
            Free trial
          </a>
        </div>

        <div className="pricing-plan">
          <img src="media/icon3.png" alt="" className="pricing-img" />
          <h2 className="pricing-header">Enterprise</h2>
          <ul className="pricing-features">
            <li className="pricing-features-item">Dedicated</li>
            <li className="pricing-features-item">
              Simple horizontal scalability
            </li>
          </ul>
          <span className="pricing-price">$400</span>
          <a href="#/" className="pricing-button">
            Free trial
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
