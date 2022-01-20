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
          <div className='card-body pt-4'>
            <h2 className='card-title fw-bold'>About This Project</h2>
            <div className='mt-4'>
              <h4>Who and What</h4>
              <p>
                This project was built by{' '}
                <a
                  href='https://zacharyeilers.com'
                  className='text-white fw-bold'
                >
                  Zachary Eilers
                </a>{' '}
                for the Shopify Front-end Developer Internship
              </p>
            </div>
            <div className='mt-4'>
              <h4>Stack</h4>
              <p>
                I used{' '}
                <a
                  href='https://getbootstrap.com/'
                  className='text-white fw-bold'
                >
                  Bootstrap{' '}
                </a>{' '}
                CSS for styling and general components, including the Navbar,
                the cards, and the grid system used for responsivity
              </p>
              <p>
                I used React with Typescript using Create React App to set up
                the project boilerplate and webpack.
              </p>
              <p>
                I used the{' '}
                <a
                  href='https://jquense.github.io/react-widgets/docs/'
                  className='text-white fw-bold'
                >
                  React Widgets Component Library
                </a>{' '}
                for the Date Picker component at the top of the home screen
              </p>
              <p>
                I used the{' '}
                <a
                  href='https://axios-http.com/'
                  className='text-white fw-bold'
                >
                  Axios
                </a>{' '}
                for the API request to NASA's Astronomy Picture of the Day API
              </p>
              <p>
                I used the{' '}
                <a
                  href='https://reactrouter.com/'
                  className='text-white fw-bold'
                >
                  React Router
                </a>{' '}
                for client-side routing
              </p>
              <p>
                I used the{' '}
                <a
                  href='https://reactrouter.com/'
                  className='text-white fw-bold'
                >
                  React Masonry Component
                </a>{' '}
                for the masonry-like look that the image cards take on desktop
                screen sizes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
