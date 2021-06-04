import React,{useState} from 'react'
import ProgressBar from "./ProgressBar"

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [fileTypes, setFileTypes] = useState("image/jpeg", "image/jpg", "image/png")
    const [errorUpload, setErrorUpload] = useState(null)

    const handleFile= (e) => {
        const selected = e.target.files[0]

        if(selected){
            if(selected.type !== "" && fileTypes.includes(selected.type)){
                setErrorUpload(selected.name)
                setFile(selected)
            }
            else{
                setErrorUpload("please upload valid type (jpeg, jpg, png)")
            }
        }
        else{
            setErrorUpload(null)
        }
        
    }
    
    
    return (
        <div>
            <form>
                <input type="file" onChange={handleFile} />
                <p>{errorUpload}</p>
            </form>
            { file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    )
}

export default UploadForm
