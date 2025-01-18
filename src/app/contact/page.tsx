export default function Contact() {
  return (
    <>
      <div className="relative top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="font-bold text-xl sm:text-2xl">Contact</h3>
      </div>

      <div className="flex flex-wrap justify-center items-start leading-6 px-4 gap-8 mt-10 mb-8">
        {/* Contact Details */}

        {/* Contact Form */}
        <div className="w-full md:w-[24rem]">
          <form className="flex flex-col gap-4 font-medium">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md"
              placeholder="Name"
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="border-gray-200 border-2 p-2 rounded-md"
              placeholder="Email"
            />
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md"
              placeholder="Optional"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="border-gray-200 border-2 p-2 rounded-md h-24"
              placeholder="Hi! I’d like to ask about..."
            ></textarea>
            <button
              type="submit"
              className="self-start bg-gray-500 hover:bg-gray-800  text-white p-3 w-[7rem] rounded-md cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
