import React from 'react';

const GoodFaithEstimatePage = () => {
  return (
    <section className="bg-[#f7f4ee] py-20 lg:py-28 font-sans text-gray-800">
      <div className="container-content max-w-3xl text-center">
        <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-10">
          Good Faith Estimate
        </h1>

        <p className="text-base md:text-lg leading-relaxed mb-8">
          <strong>Effective January 1, 2022,</strong> a ruling went into effect called the “No Surprises Act,”
          which requires mental health practitioners to provide a{' '}
          <span className="underline underline-offset-4">
            “Good Faith Estimate” (GFE) about out-of-network care to any patient who is uninsured or who is insured but does not plan to use their insurance benefits to pay for health care items and/ or services.
          </span>
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          The Good Faith Estimate works to show the cost of items and services that are reasonably expected for your mental health care needs for an item or service. The estimate is based on information known at the time the estimate was created. The Good Faith Estimate does not include any unknown or unexpected costs that may arise during treatment.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          You are entitled to receive this “Good Faith Estimate” of what the charges could be for psychotherapy services provided to you. While it is not possible for a psychotherapist to know, in advance, how many psychotherapy sessions may be necessary or appropriate for a given person upon the initiation of psychotherapy, an estimate of the cost of services will be provided. Your total cost of services will depend upon the number of psychotherapy sessions you attend, your individual circumstances, and the type and amount of services that are provided to you. This estimate is not a contract and does not obligate you to obtain any services.
        </p>
      </div>
    </section>
  );
};

export default GoodFaithEstimatePage;
