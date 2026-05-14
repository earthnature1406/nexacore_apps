import { useState } from 'react';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit the form.');
      }

      setStatus({ loading: false, success: 'Your message has been submitted successfully.', error: null });
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ loading: false, success: null, error: error.message || 'Unable to submit the form.' });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              We are here to help you with AI, Machine Learning, Cloud, and Enterprise Software Solutions.
            </p>
          </div>

          {status.success && (
            <div className="bg-green-50 border border-green-300 text-green-700 p-4 rounded-lg">
              {status.success}
            </div>
          )}

          {status.error && (
            <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg">
              {status.error}
            </div>
          )}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-medium text-gray-700">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none"
              >
                <option value="">Select a topic</option>
                <option value="consulting">AI Consulting</option>
                <option value="partnership">Technical Partnership</option>
                <option value="support">Enterprise Support</option>
                <option value="development">Software Development</option>
                <option value="other">General Inquiry</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#0077B6] hover:bg-[#005F8F] text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md w-fit disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-[#0077B6] text-white p-8 rounded-2xl shadow-sm flex flex-col gap-8 h-full justify-center">
            <div className="flex gap-4 items-start">
              <div className="bg-white/10 p-3 rounded-lg">📍</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                <p className="opacity-90 leading-7">
                  #52, 3rd Cross, Aswath Nagar,
                  <br />
                  Marathahalli, Bengaluru,
                  <br />
                  Karnataka - 560037
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-white/10 p-3 rounded-lg">✉️</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:hr@themllabs.com"
                    className="opacity-90 hover:underline hover:text-blue-200 transition-colors"
                  >
                    hr@themllabs.com
                  </a>
                  <a
                    href="mailto:bharath@themllabs.com"
                    className="opacity-90 hover:underline hover:text-blue-200 transition-colors"
                  >
                    bharath@themllabs.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-white/10 p-3 rounded-lg">📞</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="opacity-90 leading-7">
                  +91 XXXXX XXXXX
                  <br />
                  Mon - Fri, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
