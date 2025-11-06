import {
  Github,
  Linkedin,
  ChevronDown,
  Mail,
  Download,
  CheckCircle,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function Hero({ isContactModalOpen, setIsContactModalOpen }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const roles = [
    "Full-Stack Developer",
    "Adaptable Civil Engineer",
    "Continuous Learner",
    "Problem Solver",
    "Team Player",
  ];

  const rolesWithoutAspiring = [
    "Adaptable Civil Engineer",
    "Continuous Learner",
    "Problem Solver",
    "Team Player",
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies", value: "10+" },
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = rolesWithoutAspiring.includes(roles[currentRole])
      ? roles[currentRole]
      : `Aspiring ${roles[currentRole]}`;

    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, currentRole, roles, rolesWithoutAspiring]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Toast notification
  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToastMessage("Please fix the errors in the form", "error");
      return;
    }

    emailjs
      .send(
        "service_q8mxbzq",
        "template_coyg85x",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "73jkaxIQjcnGN8pWm"
      )
      .then(() => {
        showToastMessage(
          "Message sent successfully! I'll get back to you soon.",
          "success"
        );
        setIsContactModalOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        showToastMessage(
          "Failed to send message. Please try again later.",
          "error"
        );
      });
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/CV_PDGC Piyawansha_Eng.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "CV_PDGC Piyawansha_Eng.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="
        w-full min-h-[80vh] md:min-h-screen
        bg-gradient-to-br from-slate-100 to-blue-100 
        relative overflow-hidden 
        pt-[200px] md:pt-[240px] 
        pb-8 px-4 sm:px-6 lg:px-12
    "
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[size:50px_40px]"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
          style={{ top: "20%", left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-purple-400 rounded-full animate-float"
          style={{ top: "60%", left: "80%", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-blue-300 rounded-full animate-float"
          style={{ top: "40%", left: "70%", animationDelay: "4s" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-purple-300 rounded-full animate-float"
          style={{ top: "70%", left: "20%", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float"
          style={{ top: "30%", left: "90%", animationDelay: "3s" }}
        ></div>
      </div>

      <div
        className="
                    max-w-[1400px] mx-auto
                    flex flex-col-reverse md:flex-row
                    items-center md:items-center
                    justify-between
                    gap-12 md:gap-16 lg:gap-20
                    px-4 sm:px-6 lg:px-12
                    min-h-[80vh]
                "
      >
        {/* Left side - Text */}
        <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center w-full md:w-1/2 space-y-6 -mt-6 md:mt-0 ">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 leading-normal">
            Gevindu Piyawansha
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium min-h-[2rem] flex items-center justify-center">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse"></span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl text-center">
            Transforming ideas into elegant solutions through code and
            engineering excellence. Passionate about building innovative
            applications and sustainable infrastructure.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-6 justify-center mt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              View My Work
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold bg-white hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>

            {/* Contact Me Button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="
                                px-6 sm:px-8 py-3 rounded-full 
                                border-2 border-blue-600 text-blue-600 font-semibold
                                bg-white 
                                hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent
                                transition-all duration-300 shadow-sm
                            "
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 justify-center md:justify-center mt-8">
            <a
              href="https://github.com/Gevindu-Piyawansha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gevindu-piyawansha/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gevindu.piyawansha@gmail.com"
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right side - Photo */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative px-6 mt-8 md:mt-0 ">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="Gevindu Piyawansha"
              className="
                            relative w-86 h-86 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
                            rounded-full object-cover shadow-2xl border-4 border-white
                            transform group-hover:scale-105 transition-transform duration-300
                        "
            />
          </div>
        </div>
      </div>

      {/* Chevron Down Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            w-12 h-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-centertext-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-sm animate-bounce"
          aria-label="Scroll to About"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md relative animate-slideUp">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Contact Me
            </h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded text-black focus:outline-none focus:ring-2 ${
                    errors.name ? "focus:ring-red-200" : "focus:ring-blue-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded text-black focus:outline-none focus:ring-2 ${
                    errors.email ? "focus:ring-red-200" : "focus:ring-blue-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded text-black focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "focus:ring-red-200"
                      : "focus:ring-blue-200"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="
                                        px-4 py-2 rounded 
                                        bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold 
                                        hover:shadow-lg transform hover:scale-105
                                        transition-all duration-300
                                    "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-20 right-4 z-50 animate-slideInRight ${
            toastType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-md`}
        >
          {toastType === "success" ? (
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
          ) : (
            <X className="w-6 h-6 flex-shrink-0" />
          )}
          <p className="text-sm font-medium">{toastMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Hero;
