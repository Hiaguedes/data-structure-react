import React from "react"
import useStack from "../hooks/useStack";

const Stack = () => {
    const stack = useStack<number>();
    const inputRef = React.useRef<any>(null);
    const [inputValue, setInputValue] = React.useState('0');

    const RenderStackValues = React.useCallback(() => {

        if(stack.isEmpty()){
            return (<p>nao temos valores na pilha</p>)
        }

        return stack.values().reverse().map(value => (<p>{value}</p>))
    }, [stack])

    return (
        <>
            <h1>Pilha</h1>
            <input 
                ref={inputRef}
                type={'number'}
                value={inputValue} 
                onChange={(event) => {setInputValue(event.target.value)}} 
            />
            <button 
                children="Adicionar a pilha"
                onClick={() => {
                    stack.push(Number(inputValue));
                    setInputValue('')
                    inputRef.current.focus();
                }}
            />
            <button 
                children="Tirar da pilha"
                onClick={() => {
                    stack.pop();
                    setInputValue('');
                    inputRef?.current.focus();
                }}
            />
            {RenderStackValues()}
        </>
    )
}

export default Stack;