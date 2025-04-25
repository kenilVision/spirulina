

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../../Slice/notification'; // You'll need to create this slice

const Bottomnotification = () => {
  const dispatch = useDispatch();
  const { isVisible, message } = useSelector((state) => state.notification);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      right: '0',
      padding: '15px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      
    }}
    className='w-full pe-0 bg-[#E0B252] flex items-center text-white text-[20px]'
    >

<svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="24" height="24" viewBox="0 0 478.125 478.125"
	 xml:space="preserve"
     className='me-5'>
<g>
	<g>
		<g>
			<circle cx="239.904" cy="314.721" r="35.878"/>
			<path d="M256.657,127.525h-31.9c-10.557,0-19.125,8.645-19.125,19.125v101.975c0,10.48,8.645,19.125,19.125,19.125h31.9
				c10.48,0,19.125-8.645,19.125-19.125V146.65C275.782,136.17,267.138,127.525,256.657,127.525z"/>
			<path d="M239.062,0C106.947,0,0,106.947,0,239.062s106.947,239.062,239.062,239.062c132.115,0,239.062-106.947,239.062-239.062
				S371.178,0,239.062,0z M239.292,409.734c-94.171,0-170.595-76.348-170.595-170.596c0-94.248,76.347-170.595,170.595-170.595
				s170.595,76.347,170.595,170.595C409.887,333.387,333.464,409.734,239.292,409.734z"/>
		</g>
	</g>
</g>
</svg>
      {message}
      <button 
        onClick={() => dispatch(hideNotification())}
        className='ms-auto'
      >
        <svg fill="#ffffff" height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 460.775 460.775" xml:space="preserve">
<path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
</svg>
      </button>
    </div>
  );
};

export default Bottomnotification;