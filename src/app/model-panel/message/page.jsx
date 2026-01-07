"use client";

import React, { useState, useRef, useEffect } from "react";
import { Image, Send, X } from "lucide-react";

const Message = () => {
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [chat, setChat] = useState([
    {
      from: "admin",
      text: "Welcome! How can I help you today?",
      time: "10:20 AM",
    },
  ]);

  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSend = () => {
    if (!message && !imageFile) return;

    setChat((prev) => [
      ...prev,
      {
        from: "model",
        text: message,
        image: imageFile ? URL.createObjectURL(imageFile) : null,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
    setImageFile(null);
  };

  return (
    <div className="border border-gray-700 rounded-xl bg-gray-900/60 p-4 md:p-6">
      <h2 className="text-stone-200 font-semibold border-b border-gray-600 pb-3 sm:text-lg mb-6">
        Admin
      </h2>

      {/* CHAT BOX */}
      <div className="lg:h-[60vh] h-[50vh] overflow-y-auto space-y-4 pr-1">
        {chat.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.from === "model" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-2xl border text-xs sm:text-sm lg:text-base ${
                m.from === "model"
                  ? "bg-primary/10 border-primary text-stone-200"
                  : "bg-gray-800/60 border-gray-700 text-stone-300"
              }`}
            >
              {m.text && <p className="mb-1">{m.text}</p>}

              {m.image && (
                <img
                  src={m.image}
                  className="rounded-lg mt-1 max-h-48 object-cover"
                />
              )}

              <span className="text-[10px] text-stone-400 mt-1 block text-right">
                {m.time}
              </span>
            </div>
          </div>
        ))}

        <div ref={chatBottomRef}></div>
      </div>

      {/* IMAGE PREVIEW */}
      {imageFile && (
        <div className="mt-3 relative inline-block">
          <img
            src={URL.createObjectURL(imageFile)}
            className="w-28 h-28 object-cover rounded-lg border border-gray-700"
          />
          <button
            onClick={() => setImageFile(null)}
            className="absolute -top-2 -right-2 bg-black/70 rounded-full p-1"
          >
            <X size={14} className="text-white" />
          </button>
        </div>
      )}

      {/* INPUT AREA */}
      <div className="mt-4 flex items-center gap-2">
        {/* image upload */}
        <label className="p-2 rounded-lg border border-gray-700 hover:bg-gray-800 cursor-pointer">
          <Image size={18} className="text-stone-300" />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </label>

        {/* textbox */}
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message…"
          className="flex-1 bg-gray-800/60 text-stone-300 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none"
        />

        {/* send button */}
        <button
          onClick={handleSend}
          className="bg-primary hover:bg-primary/80 text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default Message;
