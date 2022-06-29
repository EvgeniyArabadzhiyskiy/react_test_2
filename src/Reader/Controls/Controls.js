
const Controls = ({onChange, maxIndex, minIndex}) => {
    return ( 
        <>
        <button type="button" onClick={() => onChange(-1)} disabled={minIndex}>Назад</button>
        <button type="button" onClick={() => onChange(1)} disabled={maxIndex}>Вперед</button>
        </>
     );
}
 
export default Controls;