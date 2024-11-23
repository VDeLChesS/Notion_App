
import { useRef, ChangeEventHandler } from 'react';
import styles from './Cover.module.css';

export const Cover = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const onChangeCoverImage = () => {
        fileInputRef.current?.click();
    }
    const onCoverImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target;
        console.log(target?.files?.[0]);
    }
    return (
        <div className={styles.cover}>
            <img src="../images/bg_cover.png" alt="Cover" className={styles.image} />
            <button className='styles.button' onClick={onChangeCoverImage}>Change cover</button>
            <label htmlFor="fileInputRef" className={styles.label}>Upload cover</label>
            <input onChange={onCoverImageUpload} ref={fileInputRef} id="fileInputRef" type="file" style={{ display: "none "}} />
        </div>
)
    }