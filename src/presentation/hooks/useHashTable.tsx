import React from "react";

export class ValuePair<K, V> {
    constructor(public key: K, public value: V) {}
  
    toString() {
      return `[#${this.key}: ${this.value}]`;
    }
  }

  export function defaultToString(item: any): string {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  }

function useHashTable<Key, Value>() {

  const [table, setTable] = React.useState<{ [key: string]: ValuePair<Key, Value> }>({});;
  const toStrFn: (key: Key) => string = defaultToString

  const loseloseHashCode = (key: Key) => {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  const hashCode = (key: Key) => {
    return loseloseHashCode(key);
  }

  const put = (key: Key, value: Value) => {
    if (key != null && value != null) {
      const position = hashCode(key);
      table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  const get = (key: Key) => {
    const valuePair = table[hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  const remove = (key: Key) => {
    const hash = hashCode(key);
    const valuePair = table[hash];
    if (valuePair != null) {
      delete table[hash];
      setTable(table)
      return true;
    }
    return false;
  }

  const getTable = () => {
    return table;
  }

  const isEmpty = () => {
    return size() === 0;
  }

  const size = () => {
    return Object.keys(table).length;
  }

  const clear = () => {
    setTable({});
  }

  const toString = () => {
    if (isEmpty()) {
      return '';
    }
    const keys = Object.keys(table);
    let objString = `{${keys[0]} => ${table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${table[keys[i]].toString()}}`;
    }
    return objString;
  }

  return {
      toString,
      put,
      isEmpty,
      clear,
      getTable,
      remove,
      get,
  }
}

export default useHashTable;