import React, { useState, useRef, useEffect } from 'react';

function ImageUploader({ onUpload }) {
  const fileInputRef = useRef(null);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleAddImages = () => {
    console.log('Adding images...');
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    if (!event.target.files || !event.target.files.length) {
      console.error('No files selected.');
      return;
    }

    const selectedFiles = Array.from(event.target.files);
    const totalImages = selectedFiles.length;

    if (totalImages > 5) {
      alert('You can only upload up to 5 images.');
      return;
    }

    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setUploadedUrls(urls); 
    onUpload(urls);
  };

  useEffect(() => {
    if (uploadedUrls.length === 0) return; 

    //new window
    const popupWindow = window.open('', '_blank');
    if (!popupWindow) {
      console.error('Failed to open popup window.');
      return;
    }

    popupWindow.document.addEventListener('DOMContentLoaded', () => {
      const imagesHTML = uploadedUrls.map((url) => `<img src="${url}" alt="Uploaded Image" style="max-width: 100%;" /><br />`).join('');
      const analysisTextHTML = '<p style="font-weight: bold;">We are analyzing your images.</p>';
      popupWindow.document.body.innerHTML = imagesHTML + analysisTextHTML;
    });
  }, [uploadedUrls]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <button className="add-images-button" onClick={handleAddImages}>
        Add Images
      </button>
    </div>
  );
}

export default ImageUploader;
