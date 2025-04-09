import React,{useState} from 'react'
import Review from '../common/Review'

function CustomerReviw() {
    const [hovered, setHovered] = useState(null);

  const handleClick = (val) => {
    onChange(val); // Pass value up
  };
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm((prev) => !prev);
    const reviews = [
        {
          rating: 3,
          date: "2025-04-07",
          author: "kenil",
          title: "good",
          body: "good product",
          productTitle: "Spirulina Face Pack Powder",
          productUrl: "/products/spirulina-face-pack-powder",
        }
      ];
    const ratingsData = [
        { stars: 5, count: 0 },
        { stars: 4, count: 0 },
        { stars: 3, count: 1 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
      ];
      const maxCount = Math.max(...ratingsData.map((r) => r.count));

  return (
    <div className='mb-[20px] mt-[50px] md:mb-[50px] md:mt-[70px] lg:mb-[70px] lg:mt-[100px]'>
    <div 
    className="w-full max-w-[1440px]  mx-auto text-center px-[15px]"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    >  
     
      <h2 className="text-4xl font-bold relative inline-block ">
      Customer Reviews
      </h2>
      <div className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto  mt-[12px] mb-[15px]"></div>
        <div className='flex flex-col lg:flex-row justify-center items-center pb-[24px]' >
            
            <div className=' w-fit flex justify-center items-center mb-[24px] lg:mb-[0px]  lg:w-1/3'> 
            <div className=''>
           <p className='flex items-center justify-center lg:justify-start gap-x-1 w-auto'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18" width="18" fill="#FDCC0D"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18" width="18" fill="#FDCC0D"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18" width="18" fill="#FDCC0D"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18" width="18" fill="#FDCC0D"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18" width="18" fill="#FDCC0D"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
           

               3.00 out of 5</p>
            <p className='lg:w-fit'>Based on 1 review</p>
            </div>
            </div> 
            <div className='lg:w-1/3 lg:border-x border-[#c2c2c2] mb-[24px] lg:mb-[0px]'> 

                    {ratingsData.map((rating) => {
        const isHighlighted = rating.count > 0;
        const barWidth = maxCount ? `${(rating.count / maxCount) * 100}%` : "0%";
        return (
          <div key={rating.stars} className="flex items-center justify-center gap-2 mb-2 text-sm">
            {/* Stars */}
            <div className="flex me-5 min-w-[70px] ">
            {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-4 h-4"
                fill={i < rating.stars ? "#FDCC0D" : "none"}
                stroke="#FDCC0D"
                strokeWidth="40"
            >
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
            </svg>
            ))}
            </div>

            {/* Bar */}
            <div className="w-[140px] bg-gray-200 h-4 overflow-hidden">
              <div
                className={`h-full ${isHighlighted ? "bg-green-400" : "bg-gray-300"}`}
                style={{ width: barWidth }}
              />
            </div>

            {/* Count */}
            <div className="text-gray-700 w-4 text-right">{rating.count}</div>
          </div>
        );
      })}
            
                </div>
            <div className='w-full lg:w-1/3'>
            <button className='bg-[#018d43] hover:cursor-pointer text-white text-[16px] py-[10px] px-[20px] w-full md:w-[240px] '
             onClick={toggleForm}>
                  {!showForm ? "write a review":"Cancel Review"}
            </button>
            </div>  

        </div>
        <div className='flex justify-center'>
        {showForm && (<form className="space-y-6 bg-white p-6 w-[568px] text-start text-[#b6b6b6]  ">
      <h2 className="text-xl font-semibold" >Write a review</h2>

      {/* Rating */}
      <div className={`{onreview ? "h-0 " : ""} overflow-hidden  `}>
        <label className="block mb-1 text-center">Rating</label>
        <div className="flex gap-1 justify-center cursor-pointer">
        {[1, 2, 3, 4, 5].map((val) => (
        <svg
          key={val}
          onMouseEnter={() => setHovered(val)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick(val)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-5 h-5 transition-transform hover:scale-110"
          fill={(hovered || val) >= val ? "#FDCC0D" : "none"}
          stroke="#FDCC0D"
          strokeWidth="40"
        >
          <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
        </svg>
      ))}
        </div>
      </div>

      {/* Review Title */}
      <div>
        <label className="block mb-1">Review Title</label>
        <input
          type="text"
          name="reviewTitle"
          placeholder="Give your review a title"
          className="w-full border p-2 "

        />
      </div>

      {/* Review Body */}
      <div>
        <label className="block mb-1">Review</label>
        <textarea
          name="reviewBody"
          rows="5"
          placeholder="Write your comments here"
          className="w-full border p-2 "

        />
      </div>

      {/* Media Upload */}
      

      {/* Reviewer Name */}
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="reviewerName"
          placeholder="Enter your name with city"
          className="w-full border p-2 "
        />
   
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="reviewerEmail"
          placeholder="Enter your email (private)"
          required
          className="w-full border p-2 "

        />
      </div>

  

      {/* Actions */}
      <div className="flex justify-center gap-x-2 items-center">
        <button type="button" className= " border-2 border-green-600 text-[#018d43] px-4 py-2  cursor-pointer">
          Cancel review
        </button>
        <button 
          type="submit"
          value="Submit Review"
          className="bg-green-600 text-white px-4 py-2  cursor-pointer"
         >
            Submit Review
         </button>
      </div>
    </form>)}
        </div>


        <div className="flex items-start py-[8px] w-full border-y text-[#018d43] border-[#018d4221] ">
      <select
        className="text-sm text-[#018d43] bg-white border-0 focus:outline-none focus:border-0  rounded py-[10px]  w-48 cursor-pointer"
      >
        <option value="most-recent">Most Recent</option>
        <option value="highest-rating">Highest Rating</option>
        <option value="lowest-rating">Lowest Rating</option>
        <option value="with-pictures">Only Pictures</option>
        <option value="pictures-first">Pictures First</option>
        <option value="videos-first">Videos First</option>
        <option value="most-helpful">Most Helpful</option>
      </select>

      {/* Custom arrow */}
      
    </div>
    <div>
      {reviews.map((r, idx) =>(
         <Review key={idx} {...r} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default CustomerReviw
