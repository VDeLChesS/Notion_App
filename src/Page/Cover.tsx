import { useRef, ChangeEventHandler } from 'react';
import styles from './Cover.module.css';
import { FileImage } from "../components/FileImage";
import { uploadImage } from "../utils/uploadImage"

type CoverProps = {
    filePath?: string;
    changePageCover: (filePath: string) => void;
};

export const Cover = ({ filePath, changePageCover }: CoverProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const onChangeCoverImage = () => {
        fileInputRef.current?.click();
    }
    const onCoverImageUpload: ChangeEventHandler<HTMLInputElement> = async (event) => {
        const target = event.target;
        const result = await uploadImage(target?.files?.[0])
        
        if (result?.filePath) {
            changePageCover(result.filePath);
        }
        
        console.log(target?.files?.[0]);
    }
    return (
        <div className={styles.cover}>
            {filePath ? (<FileImage className={styles.image} filePath={filePath} />) : (
                <img src="../images/bg_office.jpg" alt="Cover" className={styles.image} />
            )}
            <button className={styles.button} onClick={onChangeCoverImage}>Change cover</button>
            <label htmlFor="fileInputRef" className={styles.label}>Upload cover</label>
            <input onChange={onCoverImageUpload} ref={fileInputRef} id="fileInputRef" type="file" style={{ display: "none " }} />
        </div>
    );
};