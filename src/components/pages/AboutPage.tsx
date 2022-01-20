import React from 'react';

const gray = '#6c757d';
const grayDark = '#343a40';

const AboutPage = () => {
  return (
    <div className='bg-dark text-light pt-5' style={{ minHeight: '80vh' }}>
      <div className='container'>
        <div
          className='card border-0 shadow-sm text-white'
          style={{ backgroundColor: grayDark }}
        >
          <div className='card-body'>
            <h2 className='card-title fw-bold'>About This Project</h2>
            <div className='mt-4'>
              <h4>Stack</h4>
              <p>
                This project was built by Zachary Eilers for the Shopify
                Front-end Developer Internship
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
