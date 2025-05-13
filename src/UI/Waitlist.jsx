import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { Button } from "../components/Button";
import supabase from "./SupabaseClient";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interestText, setInterestText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [referralSource, setReferralSource] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("waitlist_signups").insert([
      {
        email,
        name: name || null,
        interest_text: interestText || null,
        rating: rating || null,
        referral_source: referralSource || null,
        user_type: userType || null,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error.message);
      alert("Something went wrong. Please try again.");
    } else {
      alert("You've been added to the waitlist!");
      // Reset form
      setEmail("");
      setName("");
      setInterestText("");
      setRating(0);
      setReferralSource("");
      setUserType("");
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoverRating(value);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gradient-to-br from-black via-zinc-900 to-amber-950/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gradient-to-br from-zinc-900/90 via-black/90 to-amber-900/10 border border-zinc-800 rounded-3xl shadow-2xl shadow-black/40 p-8 backdrop-blur-md"
      >
        <div className="mb-8 text-center">
          <h1
            className={`text-2xl text-transparent bg-[linear-gradient(to_bottom,_white_60%,_transparent_100%)] bg-clip-text font-semibold leading-snug`}
          >
            Join the Early Access Waitlist
          </h1>
          <Tagline
            label="Be among the first to explore authentic experiences — from rural escapes to cultural gems. Get early updates, perks, and invites to our beta launch."
            className="text-sm text-amber-50 mt-4"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-zinc-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
            />
          </div>

          {/* Name Field */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          {/* Interest Textarea */}
          <textarea
            value={interestText}
            onChange={(e) => setInterestText(e.target.value)}
            placeholder="What do you like most about us?"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />

          {/* Star Rating Section */}
          <div className="space-y-2">
            <p className="text-zinc-300 text-sm">
              How excited are you about our launch?
            </p>
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
                      star <= (hoverRating || rating)
                        ? "fill-amber-500 text-amber-500"
                        : "text-zinc-600"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Referral Source */}
          <select
            value={referralSource}
            onChange={(e) => setReferralSource(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="" disabled>
              How did you hear about us?
            </option>
            <option value="social_media">Social Media</option>
            <option value="word_of_mouth">Friend / Word of Mouth</option>
            <option value="web_search">Web Search</option>
            <option value="event">Event or Hackathon</option>
            <option value="other">Other</option>
          </select>

          {/* Role (Radio Buttons) */}
          <div className="text-zinc-300">
            <p className="mb-2 text-sm">You are a:</p>
            <div className="flex flex-wrap gap-4">
              {["traveler", "host", "visitor"].map((type, index) => (
                <label key={index} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={userType === type}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-radio text-amber-500 bg-zinc-800 border-zinc-600"
                  />
                  <span className="text-sm">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center"
          >
            <Button
              label="Join Waitlist"
              type="submit"
              className="w-full max-w-xs"
            />
          </motion.div>

          <p className="text-center text-sm text-zinc-400 mt-4">
            No spam. Just meaningful updates and exclusive access.
          </p>
        </form>
      </motion.div>
    </section>
  );
}

export default Waitlist;
