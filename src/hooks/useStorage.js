import {useState, useEffect} from "react"
import {projectStorage} from "../firebase/config"

const useStorage = () => {
    const [progress, setProgress] = useStage(0)
    const [error, setError] = useStage(null)
    const [url, setUrl] = useStage(null)

    

}