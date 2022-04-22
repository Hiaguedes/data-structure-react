import React from "react"
import useHashTable from "../hooks/useHashTable";

const HashTable = () => {
    const hashTable = useHashTable<string, string>();
    const nameRef = React.useRef<any>(null);
    const [nameValue, setNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');

    const RenderQueueValues = React.useCallback(() => {

        if(hashTable.isEmpty()){
            return (<p>nao temos valores na fila</p>)
        }

        console.log('Tabela' ,hashTable.getTable());
        return Object.values(hashTable.getTable()).map(item => (
            <div style={{display: 'flex'}}>
                <p style={{marginRight: '1rem'}}>{item.key}</p>
                <p>{item.value}</p>
            </div>
        ))
    }, [hashTable])

    React.useEffect(() => {
        hashTable.put('Ygritte', 'ygritte@email.com');
        hashTable.put('Jonathan', 'jonathan@email.com');
        hashTable.put('Jamie', 'jamie@email.com');
        hashTable.put('Jack', 'jack@email.com');
        hashTable.put('Jasmine', 'jasmine@email.com');
        hashTable.put('Jake', 'jake@email.com');
        hashTable.put('Nathan', 'nathan@email.com');
        hashTable.put('Athelstan', 'athelstan@email.com');
        hashTable.put('Sue', 'sue@email.com');
        hashTable.put('Aethelwulf', 'aethelwulf@email.com');
        hashTable.put('Sargeras', 'sargeras@email.com');
    }, [])

    return (
        <>
            <h1>Hash Table</h1>
            <input 
                ref={nameRef}
                placeholder="Nome"
                type={'text'}
                value={nameValue} 
                onChange={(event) => {setNameValue(event.target.value)}} 
            />
            <input 
                placeholder="email"
                type={'email'}
                value={emailValue} 
                onChange={(event) => {setEmailValue(event.target.value)}} 
            />
            <button 
                children="Adicionar a tabela hasheada"
                onClick={() => {
                    hashTable.put(nameValue, emailValue);
                    nameRef.current.focus();
                }}
            />
            <button 
                children="Retirar da tabela hasheada"
                onClick={() => {
                    hashTable.remove(nameValue)
                    nameRef?.current.focus();
                }}
            />
            {RenderQueueValues()}
        </>
    )
}

export default HashTable;