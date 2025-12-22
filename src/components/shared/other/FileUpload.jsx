"use client";

import { CheckCircle, Upload } from "lucide-react";
import React from "react";

const FileUpload = ({
  title,
  accept,
  icon,
  optional = false,
  file,
  onFileSelect,
}) => {
  const handleChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    if (onFileSelect) onFileSelect(selectedFile);
  };

  const isImage = file && file.type.startsWith("image/");

  return (
    <label
      className={`flex flex-col hover:bg-gray-900 items-center justify-center p-6 border-2 border-dashed  rounded-lg border-gray-500 cursor-pointer hover:border-primary/50 transition-colors relative ${
        file ? "border-primary" : "border-border"
      }`}
    >
      <input
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />

      <div className="text-center space-y-3 w-full">
        <div className="flex justify-center">
          {isImage ? (
            <img
              src={URL.createObjectURL(file)}
              alt={title}
              className="h-24 w-24 object-cover rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-8 w-8 text-stone-300" />
              {icon}
            </div>
          )}
        </div>

        <h3 className="text-stone-200  font-medium">
          {title}{" "}
          {optional && (
            <span className="text-stone-400 text-xs">(Optional)</span>
          )}
        </h3>

        {file && !isImage && (
          <div className="flex items-center justify-center gap-2 text-green-600 text-xs font-medium">
            <CheckCircle size={14} />
            <span className="max-w-[220px]  truncate" title={file.name}>
              {file.name}
            </span>
          </div>
        )}

        {!file && (
          <p className="text-xs text-stone-400">
            {accept === "application/pdf,image/*" ? "PDF or Image" : "Image"}{" "}
            Click to select file
          </p>
        )}
      </div>
    </label>
  );
};

export default FileUpload;
