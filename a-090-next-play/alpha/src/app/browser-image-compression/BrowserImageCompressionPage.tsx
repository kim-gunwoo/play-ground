'use client'

import { useRef, useState } from "react";
import imageCompression from "browser-image-compression";




export default function BrowserImageCompressionPage() {
    const uploadRef = useRef<HTMLInputElement>(null)
    const [imgFile, setImgFile] = useState<File>();
    const [uploadPreview, setUploadPreview] = useState<string>('');

    const onClickLabel = () => {
        uploadRef.current!.click();
    }

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];

            setImgFile(file);
            let reader = new FileReader();
            if (file) {
                reader.readAsDataURL(file);
            }

            reader.onloadend = () => {
                const previewImgUrl = reader.result as string;
                console.log(previewImgUrl)
                if (previewImgUrl) {
                    setUploadPreview(previewImgUrl);
                }
            };

        }
    };

    const imageCompress = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;
        if (files && files.length > 0) {
            const file = files[0];

            const options = {
                maxSizeMB: 0.2, // 이미지 최대 용량
                maxWidthOrHeight: 1920, // 최대 넓이(혹은 높이)
                useWebWorker: true,
            };
            try {
                const compressedFile = await imageCompression(file, options);
                setImgFile(compressedFile);
                const promise = imageCompression.getDataUrlFromFile(compressedFile);
                promise.then((result) => {
                    setUploadPreview(result);
                })
            } catch (error) {
                console.log(error)
            }
        }
    };

    return <div>
        <label htmlFor="image" onClick={onClickLabel}>
            <div>
                <h4>클릭하여 업로드</h4>
                <span>권장사항: 5MB 이하 고화질</span>
            </div>
        </label>
        <input type="file" accept="image/*" id="image" ref={uploadRef} onChange={onChangeImage} />
        {/* <input type="file" accept="image/*" id="image" ref={uploadRef} onChange={imageCompress} /> */}
        <img src={uploadPreview} alt="previewImage" />
    </div>
}