import React from 'react'
import { Checkbox } from '../../../UI';
import styles from './Steps.module.scss'

interface StepOneProps {
  returnData: (volume: number, chapter: number) => void
}
const StepOne: React.FC<StepOneProps> = ({ returnData }) => {

  const [chapter, setChapter] = React.useState<number>(1);
  const [volume, setVolume] = React.useState<number>(1);
  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleChapter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChapter(prev => Number(e.target.validity.valid ? e.target.value : prev));
  }
  const toggleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(prev => Number(e.target.validity.valid ? e.target.value : prev));
  }

  const isChecked = (checked: boolean) => {
    checked && (setChapter(0), setVolume(1))
    setChecked(checked)
  }

  React.useEffect(() => {
    console.log(123);

    return returnData(volume, chapter)

  }, [volume, chapter, returnData]
  )
  return (
    <div>
      <div className={styles.inputWrapper}>
        <label className={styles.label}>Volume number: </label>
        <input className={styles.input} disabled={checked} placeholder='Set volume number' type="text" pattern="[0-9]*" value={chapter} onChange={toggleChapter} />
        <p className={styles.info}>Last volume was 1 *</p>
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.label}>Chapter number: </label>
        <input className={styles.input} disabled={checked} placeholder='Set chapter number' pattern="[0-9]*" value={volume} onChange={toggleVolume} />
        <p className={styles.info}>Last chapter was 2 *</p>
      </div>

      <div className={styles.checkboxWrapper}>
        <Checkbox returnValue={isChecked} />
        <p>It&apos;s announcement</p>
      </div>


    </div>
  )
}

export default StepOne