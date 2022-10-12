import { useState, useRef, useEffect } from "react"
import { isBlob } from "next/dist/server/web/is"
import { Stack } from "@mui/material"

import ReactCrop from "react-image-crop"
import { useDropzone } from "react-dropzone"
import "react-image-crop/dist/ReactCrop.css"

import { Span } from "../utils/styling"

export default function ImageUploader({ imageSrc, open, close, icon, isRound, setAvatar, onSave, imgName, children }) {
  const [croppedImage, setCroppedImage] = useState(undefined) //finale image
  const [selectedFile, setSelectedFile] = useState(null)
  const filePicker = useRef(null)

  const { getRootProps, getInputProps } = useDropzone({
    //drag and drop functionality
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    accept: "image/jpeg,image/png",
    onDrop: (files) => {
      let file = files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedFile(event.target.result)
      }
      reader.readAsDataURL(file)
    },
  })

  const uploadImage = (e) => {
    //regular upload
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  async function updateAvatar({ croppedImage }) {
    const fd = new FormData()
    fd.append("file", croppedImage, "avatar.png")

    await fetch(`${serverUrl}/files/`, {
      method: "POST",
      option: 'counter',
      credentials: "include",
      cache: "no-cache",
      headers: {
        "accept": "application/json",
      },
      body: fd
    }).then((response) => {
      if (response.ok) {
        response.json().then(async (data) => {
          setAvatar(data.filename)
          await fetch(`${serverUrl}/users/me/profile/`, {
            method: "POST",
            option: 'counter',
            credentials: "include",
            cache: "no-cache",
            headers: {
              "accept": "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ "avatar": data.id })
          })
        }).then((response) => console.log(response))
      }
    })
  }

  const [cropConfig, setCropConfig] = useState()
  const [imageRef, setImageRef] = useState()
  const onImageCropped = (croppedImage) => {
    setCroppedImage(croppedImage)
    if (imageSrc) imageSrc()
  }

  useEffect(() => {
    cropImage({
      unit: "%",
      width: 100,
      aspect: 16 / 16,
    })
    setCropConfig({
      unit: "%",
      width: 100,
      aspect: 16 / 16,
    })
  }, [selectedFile, imageRef])

  function cropImage(crop) {
    if (imageRef && crop.width && crop.height) {
      getCroppedImage(imageRef, crop, "croppedImage.jpeg")
        .then(croppedImage => onImageCropped(croppedImage))
        .catch(console.log)
    }
  }

  function getCroppedImage(sourceImage, cropConfig, fileName) {
    // creating the cropped image from the source image
    const canvas = document.createElement("canvas")
    const scaleX = sourceImage.naturalWidth / sourceImage.width
    const scaleY = sourceImage.naturalHeight / sourceImage.height
    canvas.width = cropConfig.width
    canvas.height = cropConfig.height
    const ctx = canvas.getContext("2d")
    ctx.drawImage(
      sourceImage,
      cropConfig.x * scaleX,
      cropConfig.y * scaleY,
      cropConfig.width * scaleX,
      cropConfig.height * scaleY,
      0,
      0,
      cropConfig.width,
      cropConfig.height
    )
    return new Promise((resolve, reject) => {
      return canvas.toBlob((blob) => {
        // returning an error
        if (!blob) {
          reject(new Error("Canvas is empty"))
          return
        }
        console.log(blob)
        blob.name = fileName
        resolve(blob)
      }, "image/jpeg")
    })
  }

  const [loading, setLoading] = useState(false)
  const loader = () => {
    setTimeout(() => {
      setLoading(false)
      setSelectedFile(null)
      close(false)
    }, 2000)
  }

  return (
    <AEDialog
      open={open}
      onClose={() => {
        close(false)
        setSelectedFile(null)
      }}>
      <Stack justifyContent="center" alignItems="center">
        <Stack justifyContent="center" alignItems="center" style={{ maxWidth: "565px", width: "100%", height: "100%", borderRadius: "5px", }}>
          <div {...getRootProps()} style={{ maxWidth: "100%", width: "460px", height: "90%" }}>
            {selectedFile ? (
              <>
                <style jsx global>{`
                  .ReactCrop *, .ReactCrop::before, .ReactCrop::after {
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                  .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {
                    width: ${isRound ? "95% !important" : "100% !important"};
                  }
                  .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after {
                    height: ${isRound ? "95% !important" : "100% !important"};
                  }
                  .ReactCrop__image {
                    border-radius: 5px;
                  }
                `}</style>
                <ReactCrop
                  src={selectedFile}
                  crop={cropConfig}
                  circularCrop={isRound}
                  ruleOfThirds
                  onImageLoaded={(imageRef) => setImageRef(imageRef)}
                  onComplete={(cropConfig) => cropImage(cropConfig)}
                  onChange={(cropConfig) => setCropConfig(cropConfig)}
                  crossorigin="anonymous" // to avoid CORS-related problems
                />
              </>
            ) : (
              <>
                <Stack justifyContent="center" alignItems="center" role="button" onClick={() => filePicker.current.click()}
                  style={{ maxWidth: "100%", width: "460px", height: "300px", borderRadius: "5px", border: "1px solid #D7D4D4", cursor: "pointer" }}>
                  <div style={{ width: "75px", height: "75px", fill: "#D7D4D4" }} >
                    {icon}
                  </div>
                  <Span kind="b3" style={{ marginTop: "40px", color: "#D7D4D4" }} >
                    выберите или перетащите изображение
                  </Span>
                </Stack>
                <input
                  {...getInputProps()}
                  type="file"
                  hidden
                  ref={filePicker}
                  onChange={uploadImage}
                />
              </>
            )}
          </div>
        </Stack>
        {children}
        {isBlob(croppedImage) ? (
          <AEGradientButton
            style={{ marginTop: 50, marginBottom: 5, maxWidth: "70%" }}
            onClick={() => {
              onSave ? onSave({ croppedImage }) : updateAvatar({ croppedImage })
              setLoading(true)
              loader()
            }}
          >
            {loading ? (
              <Loading type="points-opacity" color="white" textColor="white" />
            ) : (
              <Span kind="h3">Сохранить</Span>
            )}
          </AEGradientButton>
        ) : (
          <AEGradientButton style={{ marginTop: 30, maxWidth: "70%", userSelect: "none", pointerEvents: "none", opacity: "0.5", cursor: "not-allowed" }} >
            <Span kind="h3">Сохранить</Span>
          </AEGradientButton>
        )}
      </Stack>
    </AEDialog>
  )
}
