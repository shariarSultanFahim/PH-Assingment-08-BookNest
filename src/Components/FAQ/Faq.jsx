const Faq = () => {
    return (
        <div className=" mx-auto  flex flex-col justify-center items-center min-h-screen">
          <section className="bg-white w-4/5 px-10 pb-8 pt-10 rounded-lg shadow-md flex flex-col">
            <div className="w-full">
              <p className="text-xl font-semibold mb-5">Questions and answers about Book Nest</p>
            </div>
            <details className="mb-4 border border-gray-200 rounded px-3 py-2 relative open:shadow-lg">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              What is Book Nest?
                <span className="absolute top-0 right-0 bg-gray-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="text-xs pt-3">
              Book Nest is a professional platform dedicated to all things related to books. We provide interesting and informative content about books, including reviews, recommendations, and insights.
              </p>
            </details>
            <details className="mb-4 border border-gray-200 rounded px-3 py-2 relative open:shadow-lg">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              What can I find on Book Nest?
                <span className="absolute top-0 right-0 bg-gray-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="text-xs pt-3">
              At Book Nest, you can discover valuable information about the world of books, including reviews, recommendations, and insights to help you make informed reading choices.

              </p>
            </details>
            <details className="mb-4 border border-gray-200 rounded px-3 py-2 relative open:shadow-lg">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Why should I trust the information on Book Nest?
                <span className="absolute top-0 right-0 bg-gray-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="text-xs pt-3">
              Book Nest prioritizes dependability and aims to offer reliable and trustworthy content for book enthusiasts. Our focus is on providing valuable information to enhance your reading experience.
              </p>
            </details>
            <details className="mb-4 border border-gray-200 rounded px-3 py-2 relative open:shadow-lg">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Are the reviews on Book Nest unbiased?
                <span className="absolute top-0 right-0 bg-gray-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="text-xs pt-3">
              Yes, at Book Nest, we strive to maintain objectivity and provide honest reviews to help readers make informed decisions about their reading choices.

              </p>
            </details>
          </section>
          <section className="bg-white w-4/5 px-10 pb-8 pt-10 rounded-lg shadow-md flex flex-col">
            <div className="w-full">
              <p className="text-xl font-semibold mb-5">Questions and answers about login</p>
            </div>
            <details className="mb-4 border border-gray-200 rounded px-3 py-2 relative open:shadow-lg">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                Do I have to allow the use of cookies?
                <span className="absolute top-0 right-0 bg-gray-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="text-xs pt-3">
                Yes, in order to use My Page, you must allow the use of cookies in your browser. <br />
                <br />
                See also: What is a cookie and what does it do?
              </p>
            </details>
            <details className="mb-4 border border-gray-200 rounded px-3 py-2 relative open:shadow-lg">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                How do I change my My Page Password?
                <span className="absolute top-0 right-0 bg-gray-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="text-xs pt-3">
                Login to your account and goto edit account.
              </p>
            </details>
          </section>
        </div>
      );
    };

export default Faq;