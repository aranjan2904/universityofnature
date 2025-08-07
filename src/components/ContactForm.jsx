// ContactForm.jsx


function ContactForm() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Join Our Mission</h2>
        <p className="text-center text-gray-600 mb-6">
          Ready to make a difference? Get in touch with us and become part of our environmental movement.
        </p>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
