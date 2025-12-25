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
  const inputRef = React.useRef(null);
  const [preview, setPreview] = React.useState(null);

  React.useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    onFileSelect?.(selectedFile);
  };

  const isImage = file?.type?.startsWith("image/");

  return (
    <label
      className={`relative flex flex-col items-center justify-center p-5 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${file ? "border-primary/60" : "border-gray-500 hover:border-primary/40"}
      `}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />

      {/* IMAGE PREVIEW INSIDE INPUT */}
      {isImage && preview ? (
        <div className="relative w-full flex justify-center">
          <img
            src={preview}
            alt="preview"
            className="h-24 w-24 object-cover rounded-lg"
          />

          <span className="absolute bottom-1 right-1 bg-primary text-white text-[10px] px-3 py-2 rounded">
            Change
          </span>
        </div>
      ) : (
        <div className="text-center space-y-2">
          <Upload className="h-6 w-6 text-stone-500 mx-auto" />
          <h3 className="text-stone-200 text-xs md:text-sm">
            {title}{" "}
            {optional && (
              <span className="text-stone-400 text-xs md:text-sm">(Optional)</span>
            )}
          </h3>
          <p className="text-xs text-stone-400">Click to select image</p>
        </div>
      )}

      {/* FILE NAME (non-image) */}
      {file && !isImage && (
        <div className="mt-2 flex items-center justify-center gap-2 text-green-600 text-xs font-medium">
          <CheckCircle size={14} />
          <span className="max-w-[220px] truncate">{file.name}</span>
        </div>
      )}
    </label>
  );
};

export default FileUpload;
