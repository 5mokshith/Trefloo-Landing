import React, { useState } from "react";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { Button } from "../components/Button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import supabase from "./SupabaseClient";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "",
    message: "",
    rating: 0,
  });
  const [hoverRating, setHoverRating] = useState(0);

  async function handleFormData(e) {
    e.preventDefault();

    const { error } = await supabase.from("feedback").insert([
      {
        name: formData.name || null, // Optional
        email: formData.email,
        feedback_type: formData.feedbackType || null,
        message: formData.message,
        rating: formData.rating,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error.message);
      alert("Failed to submit feedback. Please try again.");
    } else {
      alert("Thanks for your feedback!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        feedbackType: "",
        message: "",
        rating: 0,
      });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleStarClick = (value) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleStarHover = (value) => {
    setHoverRating(value);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gradient-to-br from-black via-zinc-900 to-amber-950/30">
      <form
        onSubmit={handleFormData}
        className="w-full max-w-lg bg-gradient-to-br from-zinc-900/90 via-black/90 to-amber-900/10 border border-zinc-800 rounded-3xl shadow-2xl shadow-black/40 p-8 backdrop-blur-md"
      >
        <div className="mb-8 text-center">
          <h1
            className={`gradient-heading text-2xl m-2 text-transparent bg-[linear-gradient(to_bottom,_white_60%,_transparent_100%)] bg-clip-text font-semibold leading-snug`}
          >
            We Value Your Feedback
          </h1>
          <Tagline
            label="Your thoughts help us improve and tailor our services to your needs. Let us know what you think about Trefloo!"
            className="text-sm text-amber-50"
          />
        </div>

        <div className="mb-5 text-left">
          <label
            htmlFor="name"
            className="block text-zinc-300 mb-1 text-sm font-medium"
          >
            Name <span className="text-zinc-500">(Optional)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            autoComplete="off"
          />
        </div>

        <div className="mb-5 text-left">
          <label
            htmlFor="email"
            className="block text-zinc-300 mb-1 text-sm font-medium"
          >
            Your Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            required
            className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            autoComplete="off"
          />
        </div>

        <div className="mb-5 text-left">
          <label className="block text-zinc-300 mb-1 text-sm font-medium">
            Rate Your Experience <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                className="focus:outline-none"
              >
                <Star
                  size={28}
                  className={`transition-colors duration-200 ${
                    star <= (hoverRating || formData.rating)
                      ? "fill-amber-500 text-amber-500"
                      : "text-zinc-600"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mb-5 text-left">
          <label
            htmlFor="feedbackType"
            className="block text-zinc-300 mb-1 text-sm font-medium"
          >
            Feedback Type
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          >
            <option value="">Select feedback type</option>
            <option value="suggestion">Suggestion</option>
            <option value="bug">Bug Report</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div className="mb-8 text-left">
          <label
            htmlFor="message"
            className="block text-zinc-300 mb-1 text-sm font-medium"
          >
            Share Your Thoughts <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your feedback..."
            required
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
          />
        </div>
{/* TODO: chill */}
        <div className="flex justify-center">
          <Button
            label="Submit Feedback"
            type="submit"
            className="w-full max-w-xs"
          />
        </div>
      </form>
    </section>
  );
}

export default Feedback;
