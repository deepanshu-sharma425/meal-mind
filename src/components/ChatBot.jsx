import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import axios from "axios";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me any question about Nutri Flow." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const predefinedQuestions = [
    {
      question: "What is Nutri Flow?",
      answer:
        "Nutri Flow is a smart meal planning application that helps you create personalized meal plans based on your dietary preferences, health goals, and available ingredients and also you can make your meals by the recipes in the web application",
    },
    {
      question: "How do I create a meal plan?",
      answer:
        "To create a meal plan, go to the 'signup' section,fill all the nedded information, select your dietary preferences, choose your goals (like weight loss or muscle gain), and Nutri Flow will generate a customized weekly plan for you.",
    },
    {
      question: "Can I track my nutrition with Nutri Flow?",
      answer:
        "Yes! Nutri Flow provides detailed nutrition tracking for all your meals. You can view fats,carbs,protein, and daily totals in the 'profile' dashboard.",
    },
    {
      question: "Does Nutri Flow have mobile apps?",
      answer:
        "Currently Nutri Flow is web-based, but we're developing mobile apps for iOS and Android that will be released later this year.",
    },
  ];

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setLoading(true);

    try {
      const API_KEY = "AIzaSyCV9_6I4OgTbu-324GmVgIbrDXz96UCZjk";
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [{ parts: [{ text: userMessage }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": API_KEY,
          },
        }
      );

      const botReply =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handlePredefinedQuestion = (questionObj) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: questionObj.question },
    ]);

    setMessages((prev) => [...prev, { from: "bot", text: questionObj.answer }]);
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center focus:outline-none"
          aria-label="Open chat bot"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}
      {open && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-emerald-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-emerald-100 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-t-2xl">
            <span className="font-bold text-white">Ask a Question</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-emerald-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-[70%] ${
                    msg.from === "user"
                      ? "bg-emerald-200 text-emerald-900"
                      : "bg-white text-gray-800 border border-emerald-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl text-sm bg-white text-gray-800 border border-emerald-100">
                  Typing...
                </div>
              </div>
            )}
          </div>
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-emerald-50 border-t border-emerald-100">
              <h3 className="text-xs font-semibold text-emerald-600 mb-2">
                QUICK QUESTIONS
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {predefinedQuestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedQuestion(item)}
                    className="text-xs p-2 bg-white hover:bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200 transition-colors"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            onSubmit={handleSend}
            className="p-3 border-t border-emerald-100 bg-white rounded-b-2xl flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
