import React, { useState, useRef, useCallback, useEffect } from "react";
import Carousel from "./components/carousel/index";
import FileUploader from "./components/fileUploader/index";
import Modal from "./components/modal/index";
import "./styles.css";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setModalState] = useState(false);
  const uploadInputRef = useRef(null);

  const convertImageToUrl = useCallback(
    image => {
      const reader = new FileReader();
      reader.onload = e => {
        setSelectedImage(e.target.result);
      };
      image && reader.readAsDataURL(image);
    },
    [setSelectedImage]
  );

  const uploadHandler = () => {
    convertImageToUrl(uploadInputRef.current.files[0]);
    setModalImage(selectedImage);
  };

  const modalHandler = (modalState = false) => {
    setModalState(modalState);
  };

  const modalImageHandler = image => {
    setModalImage(image);
    modalHandler(true);
  };

  useEffect(() => {
    selectedImage && setUploadedImages([...uploadedImages, selectedImage]);
  }, [selectedImage]);

  return (
    <div className="App">
      <Carousel
        uploadedImages={uploadedImages}
        modalImageHandler={modalImageHandler}
      />
      <FileUploader ref={uploadInputRef} uploadHandler={uploadHandler} />
      {isModalOpen && (
        <Modal
          modalImage={modalImage}
          modalHandler={state => modalHandler(state)}
        />
      )}
    </div>
  );
}
