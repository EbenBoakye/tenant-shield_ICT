import React, { useState } from 'react';

const EligibilityPage = () => {
  const [isEligible, setIsEligible] = useState(false);

  const handleGoToCourt = () => {
    // Add logic for actions when going to court
    console.log('Proceeding to court');
  };

  const handlePrintForm = () => {
    // Add logic for printing the form
    console.log('Printing the form');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Legal Aid Eligibility</h1>
      {isEligible ? (
        <>
          <p className="mb-4">Congratulations! You are eligible for legal aid.</p>
          <button
            onClick={handleGoToCourt}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            Go to Court
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">
            Unfortunately, you are not eligible for legal aid. However, you can still proceed to court.
          </p>
          <button
            onClick={handleGoToCourt}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            Go to Court
          </button>
        </>
      )}
      <button
        onClick={handlePrintForm}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Print Form
      </button>
    </div>
  );
};

export default EligibilityPage;
