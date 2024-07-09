import React from 'react';

function Resources() {
    const faqs = [
        {
          question: "What is the purpose of this website?",
          answer: "The purpose of this website is to provide a platform for users to refer and earn bonuses."
        },
        {
          question: "How do I refer a friend?",
          answer: "You can refer a friend by clicking on the 'Refer Now' button and filling out the referral form."
        },
        {
          question: "What are the benefits of referring?",
          answer: "You can earn bonuses and rewards for each successful referral."
        },
        {
          question: "How can I track my referrals?",
          answer: "You can track your referrals in your user dashboard under the 'My Referrals' section."
        },
        {
          question: "How do I contact support?",
          answer: "You can contact support by filling out the form on the 'Contact Us' page."
        }
      ];
    
  return (
    <div
      name="Resources"
      className="max-w-screen-xl container mx-auto px-4 md:px-20 my-28"
    >
      <h1 className="text-3xl font-bold mb-10 text-center">
        What are the referral <span className="text-blue-800">Benefits</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-800 text-white">Programs</th>
              <th className="py-2 px-4 bg-blue-800 text-white">Bonus</th>
              <th className="py-2 px-4 bg-blue-800 text-white">Benefits</th>
            </tr>
          </thead>
          <tbody>
            {[
              { program: 'Program A', bonus: '$10', benefit: 'Access to exclusive content' },
              { program: 'Program B', bonus: '$20', benefit: 'Free e-book' },
              { program: 'Program C', bonus: '$15', benefit: 'Discount on next purchase' },
              { program: 'Program D', bonus: '$25', benefit: 'Free merchandise' },
              { program: 'Program E', bonus: '$30', benefit: 'Extended trial period' },
              { program: 'Program F', bonus: '$50', benefit: 'Premium support' },
              { program: 'Program G', bonus: '$40', benefit: 'Invitation to events' },
              { program: 'Program H', bonus: '$35', benefit: 'Access to webinars' },
              { program: 'Program I', bonus: '$45', benefit: 'Exclusive discounts' },
              { program: 'Program J', bonus: '$55', benefit: 'Free consultation' },
            ].map((row, index) => (
              <tr key={index} className="text-center border-t">
                <td className="py-2 px-4">{row.program}</td>
                <td className="py-2 px-4">{row.bonus}</td>
                <td className="py-2 px-4">{row.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-800 mt-6">
        What are the Frequently Asked questions.
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Resources;
