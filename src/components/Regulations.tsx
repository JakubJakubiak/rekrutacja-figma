import { useNavigate } from 'react-router-dom';

export const Regulations = () => {
  const navigate = useNavigate(); 
  window.scrollTo(0, 0);
  return (
    <section id="features" className="py-16  bg-base-100  ">
    <div className="p-6 max-w-4xl mx-auto bg-base-200  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <button onClick={() =>
      {   
          navigate('/'); 
          // navigate(-1);
          // window.scrollTo({ top: 100, behavior: 'smooth' , });
      }}
        className="flex items-center space-x-2 mb-6 text-secondary hover:text-secondary-dark transition-colors duration-200"
      >

        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span>Back</span>
      </button>

      {/* Privacy Policy Content */}
      <h1 className="text-4xl font-extrabold text-gray-100 mb-4">Privacy Policy</h1>
      <p className="text-gray-100 leading-relaxed mb-4">
        Thank you for using Curiosity Quench! At Curiosity Quench, we take your privacy seriously.
        This Privacy Policy outlines how we collect, use, and protect your information when you use
        our website.
        Please read this policy carefully to understand how we handle your data.
      </p>

      <h2 className="text-2xl font-bold text-gray-100 mb-2">1. Information We Collect</h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        We collect the following information from our users:
      </p>
      <ul className="list-disc list-inside text-gray-100 mb-4">
        {/* <li><strong>Name:</strong> We collect your name to personalize your experience and communicate with you effectively.</li>
        <li><strong>Email:</strong> Your email address is required for account-related notifications and to send you updates.</li>
        <li><strong>Payment Information:</strong> We collect payment information solely for processing your orders securely. Rest assured that we prioritize your payment data’s security.</li> */}
        <li><strong>Non-Personal Data:</strong> We use web cookies to gather non-personal information about your browsing preferences. These cookies help enhance your user experience and analyze website traffic.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 mb-2">2. Purpose of Data Collection</h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        We collect and use your data for the following purposes:
      </p>
      <ul className="list-disc list-inside text-gray-100 mb-4">
        <li><strong>Order Processing:</strong> Your name and payment information are essential for processing orders you make through our platform.</li>
        <li><strong>Account Login:</strong> We use your email and name for account creation and login purposes.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 mb-2">3. Data Sharing</h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        We want to make it clear: we do not share your data with any third parties. Your information is kept confidential and is used exclusively for the purposes mentioned in this policy.
      </p>

      <h2 className="text-2xl font-bold text-gray-100 mb-2">4. Children's Privacy</h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        Apk does not collect any data from children. Our services are intended for individuals who are at least 15 years old or the legal age of consent in their jurisdiction.
      </p>

      <h2 className="text-2xl font-bold text-gray-100 mb-2">5. Updates to the Privacy Policy</h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you about any significant changes via email.
      </p>

      <h2 className="text-2xl font-bold text-gray-100 mb-2">6. Contact Information</h2>
      <p className="text-gray-100 leading-relaxed mb-4">
        If you have any questions or concerns about our Privacy Policy or how we handle your data, please feel free to contact us at <a href="mailto:developerinu@gmail.com" className="text-blue-100 hover:underline">jack@frikit.net</a>.
      </p>

      <p className="text-gray-100 leading-relaxed">
        Thank you for trusting  with your information. We are committed to protecting your privacy and helping you explore your curiosities while keeping your data safe and secure.
      </p>
    </div>
    </section>
  );
};
