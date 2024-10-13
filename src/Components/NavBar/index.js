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
        <h1 className="text-4xl font-semibold text-blue-700">Life at AAK</h1>
        <p className="text-blue-500 mt-2">Where commitment and passion drive innovation</p>
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
        <div className="col-span-2 row-span-2 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 1
          </div>
        </div>
        <div className="col-span-1 row-span-2 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 2
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 3
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 4
          </div>
        </div>

        {/* Second Row */}
        <div className="col-span-1 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 5
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 6
          </div>
        </div>
        <div className="col-span-1 row-span-2 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 7
          </div>
        </div>
        <div className="col-span-2 row-span-2 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 8
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 9
          </div>
        </div>

        {/* Third Row */}
        <div className="col-span-1 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 10
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 11
          </div>
        </div>
        <div className="col-span-2 row-span-1 border-4 border-blue-500 rounded-lg">
          <div className="w-full h-full bg-gray-100 flex justify-center items-center">
            Image 12
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessSection = () => {
  return (
    <div className="container mx-auto px-[173px] py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-blue-700">
          And, that's what our <span className="font-bold">success hinges on!</span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-8" style={{ width: '514px', height: '472px' }}>
          <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('path-to-background-pattern')" }}></div>
          <h3 className="text-xl font-bold text-blue-900 mb-6 relative">Inclusive and diverse workplace</h3>
          <p className="text-gray-600 relative leading-relaxed">
            An environment where diversity is valued, inclusiveness is fostered, perspectives are respected, and collaborations are prioritized.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-8 relative" style={{ width: '514px', height: '472px' }}>
          <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('path-to-background-pattern')" }}></div>
          <h3 className="text-xl font-bold text-blue-900 mb-6 relative">Interdependent culture</h3>
          <p className="text-gray-600 relative leading-relaxed">
            A collaborative work environment where bridges are built across teams, enabling cross-disciplinary alignment to act and work together.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-8 relative" style={{ width: '514px', height: '472px' }}>
          <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('path-to-background-pattern')" }}></div>
          <h3 className="text-xl font-bold text-blue-900 mb-6 relative">Innovative environment</h3>
          <p className="text-gray-600 relative leading-relaxed">
            We are a global family that values and encourages your unique perspective and ideas across borders and disciplines.
          </p>
        </div>
      </div>
    </div>
  );
};


const HealthWellBeingSection = () => {
  return (
    <div className="container mx-auto px-[173px] py-16">
      {/* Main Section */}
      <div className="grid grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <h1 className="text-blue-700 text-5xl font-semibold mb-4 leading-tight">Health and well-being at AAK</h1>
          <p className="text-blue-500 text-lg">Energizing our people</p>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-blue-900 text-lg font-semibold mb-6">
            At AAK, we believe that a healthy and engaged workforce is the cornerstone of our success. Our commitment to health and well-being is embodied in our holistic program, AAKtivate.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Reflecting on our commitment to your well-being and engagement, AAKtivate is all about growing, connecting, and thriving as a community.
          </p>
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-2 gap-16 mt-16">
        {/* Left Side - Smaller Title and Paragraph */}
        <div>
          <h2 className="text-blue-900 text-3xl font-semibold mb-4">Empowerment through activity</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            AAKtivate and Fun Fridays encourage our teams to stay active and energized through a variety of fitness and fun initiatives, from group workouts to personal fitness challenges.
          </p>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src="path-to-image" // Replace with the actual image path
            alt="Empowerment through activity"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const RecognitionSection = () => {
  return (
    <div className="container mx-auto px-[173px] py-16">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-16 mb-12">
        {/* Left Section */}
        <div>
          <h1 className="text-blue-700 text-5xl font-semibold mb-4 leading-tight">
            Acknowledgement, recognition, and awards
          </h1>
          <p className="text-blue-500 text-lg">Celebrating excellence</p>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-blue-900 text-lg leading-relaxed">
            At AAK, we believe that recognition fuels excellence. Our framework, Acknowledge, is dedicated to celebrating the outstanding achievements and contributions of our team members.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 relative" style={{ height: '280px' }}>
          <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('path-to-background-pattern')" }}></div>
          <h3 className="text-xl font-bold text-blue-900 mb-4 relative">Spotlight on success</h3>
          <p className="text-gray-600 relative">
            Through Acknowledge, we shine a light on individual and team accomplishments, fostering a culture of appreciation and motivation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 relative" style={{ height: '280px' }}>
          <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('path-to-background-pattern')" }}></div>
          <h3 className="text-xl font-bold text-blue-900 mb-4 relative">Inspiring stories</h3>
          <p className="text-gray-600 relative">
            We share inspiring stories of innovation, dedication, and impact, highlighting the exceptional efforts that drive our success.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 relative" style={{ height: '280px' }}>
          <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('path-to-background-pattern')" }}></div>
          <h3 className="text-xl font-bold text-blue-900 mb-4 relative">Awards of distinction</h3>
          <p className="text-gray-600 relative">
            Our prestigious awards honor those who go above and beyond, setting new benchmarks in performance, creativity, and leadership.
          </p>
        </div>
      </div>
    </div>
  );
};


const HangingPictures = () => {
  return (
    <div className="container mx-auto px-[173px] py-16">
      <div className="grid grid-cols-3 gap-16 justify-center items-center">
        {/* Picture 1 */}
        <div className="relative">
          {/* Hanging Clip */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-500 rounded-t-sm"></div>
          {/* Vertical Hanging Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-400"></div>
          {/* Picture Frame */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="path-to-your-image" // Replace with your image path
              alt="Picture 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Picture 2 */}
        <div className="relative">
          {/* Hanging Clip */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-500 rounded-t-sm"></div>
          {/* Vertical Hanging Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-400"></div>
          {/* Picture Frame */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="path-to-your-image" // Replace with your image path
              alt="Picture 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Picture 3 */}
        <div className="relative">
          {/* Hanging Clip */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-500 rounded-t-sm"></div>
          {/* Vertical Hanging Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-400"></div>
          {/* Picture Frame */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="path-to-your-image" // Replace with your image path
              alt="Picture 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Picture 4 */}
        <div className="relative">
          {/* Hanging Clip */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-500 rounded-t-sm"></div>
          {/* Vertical Hanging Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-400"></div>
          {/* Picture Frame */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="path-to-your-image" // Replace with your image path
              alt="Picture 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Picture 5 */}
        <div className="relative">
          {/* Hanging Clip */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-500 rounded-t-sm"></div>
          {/* Vertical Hanging Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-400"></div>
          {/* Picture Frame */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="path-to-your-image" // Replace with your image path
              alt="Picture 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Picture 6 */}
        <div className="relative">
          {/* Hanging Clip */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-500 rounded-t-sm"></div>
          {/* Vertical Hanging Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-400"></div>
          {/* Picture Frame */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="path-to-your-image" // Replace with your image path
              alt="Picture 6"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

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

    <LifeAtAAK/>
    <PhotoCollage/>
    <SuccessSection/>
    <HealthWellBeingSection/>
    <RecognitionSection/>
    <HangingPictures/>
    </>
  );
};

export default Navbar;
