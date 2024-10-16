import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-blue-700 text-white px-[173px] py-2 flex justify-end space-x-8">
      <a href="#" className="hover:underline">About AAK</a>
      <a href="#" className="hover:underline">Life at AAK</a>
      <a href="#" className="hover:underline">Newsroom</a>
      <a href="#" className="hover:underline flex items-center">
        <span>🌐</span> Global
      </a>
      <a href="#" className="hover:underline flex items-center">
        <span>🔍</span> Search
      </a>
    </div>
  );
};


const LifeAtAAK = () => {
  return (
    <div className="bg-white min-h-screen px-[173px] py-10">
      {/* Breadcrumb */}
      <div className="text-blue-600 text-sm mb-4">
        <a href="#" className="hover:underline">Home</a>
        <span className="mx-2"> &gt; </span>
        <a href="#" className="hover:underline">Life at AAK</a>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-[64px] font-playfair font-semibold italic text-blue-700 leading-[72px] tracking-[-1%]">
          Life at <span className="font-work-sans font-normal text-[64px]">AAK</span>
        </h1>
      </div>

      {/* Vertical Divider */}
      <div className="flex justify-center mb-12">
        <div className="w-px bg-gray-300 h-20"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-2xl mx-auto text-center mt-4">
        <p className="text-lg text-gray-700">
          Amidst the natural clang of machinery and the hums of human activity, at AAK India, South Asia,
          and Sub-Saharan Africa, every day is an opportunity for you to make better happen.
        </p>
        <p className="mt-4 text-gray-600">
          We perhaps believe in creating an environment where innovation flourishes, collaboration thrives,
          and sustainable growth is at the forefront.
        </p>
      </div>
    </div>
  );
};


// const PhotoCollage = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="grid grid-cols-6 grid-rows-4 gap-4">
//         {/* First Row */}
//         <div className="col-span-2 row-span-2">
//           <img
//             src="path-to-image-1" // Replace with actual image path
//             alt="Collage Image 1"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-1 row-span-2">
//           <img
//             src="path-to-image-2"
//             alt="Collage Image 2"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-2 row-span-1">
//           <img
//             src="path-to-image-3"
//             alt="Collage Image 3"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <img
//             src="path-to-image-4"
//             alt="Collage Image 4"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Second Row */}
//         <div className="col-span-1 row-span-1">
//           <img
//             src="path-to-image-5"
//             alt="Collage Image 5"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <img
//             src="path-to-image-6"
//             alt="Collage Image 6"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-1 row-span-2">
//           <img
//             src="path-to-image-7"
//             alt="Collage Image 7"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-2 row-span-2">
//           <img
//             src="path-to-image-8"
//             alt="Collage Image 8"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <img
//             src="path-to-image-9"
//             alt="Collage Image 9"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Third Row */}
//         <div className="col-span-1 row-span-1">
//           <img
//             src="path-to-image-10"
//             alt="Collage Image 10"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <img
//             src="path-to-image-11"
//             alt="Collage Image 11"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="col-span-2 row-span-1">
//           <img
//             src="path-to-image-12"
//             alt="Collage Image 12"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };


const PhotoCollage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        {/* First Row */}
        <div className="col-span-2 row-span-2 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 1
          </div>
        </div>
        <div className="col-span-1 row-span-2 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 2
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 3
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 4
          </div>
        </div>

        {/* Second Row */}
        <div className="col-span-1 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 5
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 6
          </div>
        </div>
        <div className="col-span-1 row-span-2 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 7
          </div>
        </div>
        <div className="col-span-2 row-span-2 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 8
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 9
          </div>
        </div>

        {/* Third Row */}
        <div className="col-span-1 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 10
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 11
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-4 border-blue-700 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 12
          </div>
        </div>
      </div>
    </div>


  );
};

const SuccessSection = () => {
  const data = [
    {
      title: "Inclusive and diverse workplace",
      content:
        "We are a global family that values and encourages your unique perspective and ideas across borders and disciplines.",
    },
    {
      title: "Collaborative and supportive environment",
      content:
        "Our community is built on respect, support, and collaboration where everyone’s input matters.",
    },
    {
      title: "Growth and development opportunities",
      content:
        "We invest in personal and professional development to help you grow and reach your full potential.",
    },
  ];

  return (
    <div className="container mx-auto px-[173px] py-16">
      {/* Title Section */}


      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-[27rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-10 bg-white rounded-lg shadow-lg w-[513.3px] h-[472.39px] border border-gray-200"
        >
          <div className="w-[68%] h-full flex flex-col justify-between">
            <h2 className="font-['Work_Sans'] font-semibold text-[32px] leading-[38px] text-[#00264E] mb-6">
              {item.title}
            </h2>
            <p className="font-['Work_Sans'] font-normal text-[20px] leading-[28px] text-[#00264E] tracking-[-0.01em]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
        {/* </div> */}



      </div>
    </div>
  );
};


const HealthWellBeingSection = () => {
  const data = [
    {
      title: 'Health and well-being at AAK',
      subtitle: 'Energizing our people',
      content:
        'At AAK, we believe that a healthy and engaged workforce is the cornerstone of our success. Our commitment to health and well-being is embodied in our holistic program, AAKtivate.',
      footer:
        'Reflecting on our commitment to your well-being and engagement, AAKtivate is all about growing, connecting, and thriving as a community.',
    },
    // Add more objects here if needed
  ];
  return (
    <div className="flex  space-y-20 justify-center">
    {data.map((item, index) => (
      <div key={index} className="flex items-start w-[50%] h-[33rem]">
        <div className={`w-1/2 border-r border-[#2067CA] pl-16 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
          <h2 className="font-['Work_Sans'] font-light text-[64px] leading-[72px] text-[#2067CA] tracking-[-0.01em] mb-2">
            {item.title}
          </h2>
          <p className="font-['Work_Sans'] font-normal text-[20px] leading-[28px] text-[#2067CA]">
            {item.subtitle}
          </p>
        </div>
        <div className={`w-1/2 pr-16 ${index % 2 === 0 ? 'order-2' : 'order-1'} relative top-[17.5rem]`}>
          <p className="font-['Work_Sans'] font-normal text-[20px] leading-[28px] text-[#00264E] tracking-[-0.01em] mb-4">
            {item.content}
          </p>
          <p className="font-['Work_Sans'] font-normal text-[20px] leading-[28px] text-[#00264E] tracking-[-0.01em]">
            {item.footer}
          </p>
        </div>
      </div>
    ))}
  </div>
  );
};

const RecognitionSection = () => {
  
  return (
    <div className="flex items-center space-y-20 px-16">
    {/* Left Column - Text Content */}
    <div className="w-1/2 pr-16 flex justify-end">
     <div className='w-[70%]'>
     <h2 className="font-['Work_Sans'] font-light text-[64px] leading-[72px] text-[#00264E] tracking-[-0.01em] mb-4">
        Empowerment through activity
      </h2>

    {/* Divider */}
    <div className="border-l border-[#00264E] h-[216px] mx-8 relative" style={{ left: '-26px' }}></div>

      <p className="font-['Work_Sans'] font-normal text-[20px] leading-[28px] text-[#00264E] tracking-[-0.01em]">
        AAKtivate and Fun Fridays encourage our teams to stay active and energized through a variety of fitness and fun initiatives, from group workouts to personal fitness challenges.
      </p>
     </div>
    </div>

    {/* Right Column - Image */}
    <div className="w-1/2">
      <img
        src="path/to/your/image.jpg" // Replace with the actual image path
        alt="Empowerment through activity"
        className="rounded-md shadow-md object-cover"
      />
    </div>
  </div>
  );
};

const ExampleComponent = () => {
  return (
    
    <div className="bg-[#e6f2ff] min-h-screen  p-8">
    <div className="bg-[#e6f2ff] min-h-screen flex items-center justify-center p-8">
    <div className=" w-full flex flex-col md:flex-row gap-8 w-[70%]">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-4 w-[71%]">
          Acknowledgement, recognition, and awards
        </h1>
        <p className="text-lg text-blue-800">Celebrating excellence</p>
      </div>
      <div className="md:w-1/2 flex justify-end relative top-[12rem]">
        <p className="text-lg text-gray-700 leading-relaxed w-[60%]">
          At AAK, we believe that recognition fuels excellence. Our framework, Acknowledge,
          is dedicated to celebrating the outstanding achievements and contributions of our
          team members.
        </p>
      </div>
    </div>
  </div>
    <SuccessSection />
    </div>
  );
}

const HangingPictures = () => {

  const [hoveredFrame, setHoveredFrame] = React.useState([null])
  const frames = [
    { id: 1, color: 'bg-green-700', height: 'top-4' },
    { id: 2, color: 'bg-blue-600', height: 'top-8' },
    { id: 3, color: 'bg-green-600', height: 'top-2' },
    { id: 4, color: 'bg-blue-700', height: 'top-6' },
    { id: 5, color: 'bg-green-600', height: 'top-0' },
    { id: 6, color: 'bg-gray-200', height: 'top-10' },
  ]

  return (
    <div className="bg-white p-8 min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className={`relative ${frame.height} transition-all duration-300 ease-in-out`}
            onMouseEnter={() => setHoveredFrame(frame.id)}
            onMouseLeave={() => setHoveredFrame(null)}
          >
            {/* Frame with color fill */}
            <div className={`w-40 h-40 shadow-md p-2 ${hoveredFrame === frame.id ? 'transform scale-105' : ''}`}>
              <div className={`w-full h-full ${frame.color} flex items-center justify-center`}></div>
            </div>
            
            {/* Hanging wire */}
            <div className="absolute top-0 left-1/2 w-px h-4 bg-gray-300 -translate-x-1/2 -translate-y-full"></div>
          </div>
        ))}
      </div>
    </div>
  )
};

const  CandidConfession=()=> {
   return (
    <div className="max-w-[65%] mx-auto p-8 font-sans">
<h1 className="font-['Work_Sans'] font-light text-[128px] leading-[108px] tracking-[-0.01em] text-[#2067CA] mb-8">
  A candid <span className="italic">confession!</span>
</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Hi there!</h2>
          <div className="w-16 h-0.5 bg-gray-300 mb-4"></div>
        </div>
        
        <div className="md:col-span-2 space-y-4 text-gray-700">
          <p>Imagine a place where wild food ideas come to life, almost everyday!</p>
          
          <p>Well, that's AAK. We craft that irresistible taste in chocolates, that creamy texture in desserts, and the nourishing ingredients in health products that people pick from shelves everyday around the world.</p>
          
          <p>Is there a secret?</p>
          
          <p>We strongly believe there is!</p>
          
          <p>A closely-knit cohort of passionate, agile, accountable, and collaborative individuals, who struggle to get a good night sleep without pushing the envelope of innovation and making every project an opportunity to shine.</p>
          
          <p>And, we do it as a collective.</p>
          
          <p>As a family, we believe in the power of togetherness, whether brainstorming in the lab, sharing laughs in the break room, or volunteering in our communities.</p>
          
          <p>Life at AAK means being part of something bigger and more meaningful every day as we shape products that improve lives, with a supportive team every step of the way.</p>
          
          <p>Ready to join a cohort all about impact?</p>
          
          <p>Together, let's make the future tastier, healthier, and more sustainable.</p>
          
          <div className="mt-8 text-gray-600">
            <p>Yours truly,</p>
            <p>Culture Committee</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const Navbar = () => {
  return (
    <>
      {/* Topbar */}
      <Topbar />
      <nav className="bg-gray-100 flex justify-between items-center p-4 shadow-md border-b-2 border-blue-500 px-[130.73px]">
        {/* Logo */}
        <div className="flex items-center relative ">
          <div className="flex items-center relative ">
            <img
              src="path-to-your-logo" // Replace this with the actual image path
              alt="AAK Logo"
              className="w-28 h-auto"
            />
          </div>
          {/* Menu Items */}
          <ul className="flex space-x-8 text-blue-600 ">
            <li className="group relative">
              <button className="hover:underline">Co-Development</button>
            </li>
            <li className="group relative">
              <button className="hover:underline">Industries</button>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 p-2 rounded">
                <li className="p-2 hover:bg-gray-100">Industry 1</li>
                <li className="p-2 hover:bg-gray-100">Industry 2</li>
              </ul>
            </li>
            <li className="group relative">
              <button className="hover:underline">Stories of Impact</button>
            </li>
            <li className="group relative">
              <button className="hover:underline">Sustainability</button>
            </li>
            <li className="group relative">
              <button className="hover:underline">Manufacturing & Supply Chain</button>
            </li>
          </ul>
        </div>


        {/* Contact Us Button */}
        <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </nav>

      <LifeAtAAK />
      <PhotoCollage />
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-blue-700">
          And, that's what our <span className="font-bold">success hinges on!</span>
        </h2>
      </div>
      <SuccessSection />
      <HealthWellBeingSection />
      <RecognitionSection />
      <ExampleComponent/>

      <HangingPictures />
      <CandidConfession />
    </>
  );
};

export default Navbar;
