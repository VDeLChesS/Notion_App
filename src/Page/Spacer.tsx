import styles from './Spacer.module.css';

type SpacerProps = {
    handleClick(): void;
    showHint: boolean;
}

export const Spacer = ({ handleClick, showHint }: SpacerProps) => {
    return (
        <div className={styles.spacer} onClick={handleClick}>
            {showHint && <div className={styles.hint}>Click to add a new block</div>}
        </div>
    )
}