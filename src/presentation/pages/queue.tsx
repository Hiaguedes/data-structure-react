import React from "react"
import useQueue from "../hooks/useQueue";

const Queue = () => {
    const queue = useQueue<number>();
    const inputRef = React.useRef<any>(null);
    const [inputValue, setInputValue] = React.useState('0');

    const RenderQueueValues = React.useCallback(() => {

        if(queue.isEmpty()){
            return (<p>nao temos valores na fila</p>)
        }

        return queue.values().map(value => (<p>{value}</p>))
    }, [queue])

    return (
        <>
            <h1>Fila</h1>
            <input 
                ref={inputRef}
                type={'number'}
                value={inputValue} 
                onChange={(event) => {setInputValue(event.target.value)}} 
            />
            <button 
                children="Adicionar a fila"
                onClick={() => {
                    queue.enqueue(Number(inputValue));
                    setInputValue('')
                    inputRef.current.focus();
                }}
            />
            <button 
                children="Tirar da fila"
                onClick={() => {
                    queue.dequeue();
                    setInputValue('');
                    inputRef?.current.focus();
                }}
            />
            {RenderQueueValues()}
        </>
    )
}

export default Queue;