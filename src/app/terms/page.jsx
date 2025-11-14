"use client";
import React from "react";

const TermsCondition = () => {
  return (
    <>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            Terms and Conditions
          </h1>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
            General
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              You can not make multiple accounts. One user should have only one
              account. Failing this may result in banning all your accounts.
            </li>
            <li>
              You are responsible for your money and safety when dealing with
              others. Please do your diligence. We try our best to do our part.
            </li>
            <li>
              We reserve the right to suspend your account any time without
              notice. This includes discrediting your coins balance.
            </li>
            <li>We reserve the right to put your name in our scammer list.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
            For Students
          </h2>
          <ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              You can not share contact details in the job posting. Accounts
              that do that are automatically banned.
            </li>
            <li>
              If you chose to share your contact details with a tutor, it's your
              responsibility to verify their credentials, identity, and
              background check.
            </li>
            <li>
              You are also responsible for any monetary transactions and
              refunds. We are not liable for any fraudulent activity.
            </li>
            <li>
              We may call the phone number you provide us to confirm your
              requirements. We will never spam you with promotions on this
              phone.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
            For Tutors
          </h2>
          <ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              We do not vet students for their credit history or payment record.
              It's your responsibility to check their credentials and manage
              payments and refunds.
            </li>
            <li>
              Your profile will be permanently banned if you share contact
              details unless specifically asked for the same.
            </li>
            <li>
              We may call the phone number you provide us regarding your
              account. We will never spam you with promotions on this phone.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
