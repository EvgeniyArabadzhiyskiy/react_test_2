
const Controls = ({onPrev, onNext, maxIndex, minIndex}) => {
    return ( 
        <>
        <button type="button" onClick={onPrev} disabled={minIndex}>Назад</button>
        <button type="button" onClick={onNext} disabled={maxIndex}>Вперед</button>
        </>
     );
}
 
export default Controls;