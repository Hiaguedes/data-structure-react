import React from "react";

function useQueue<T> () {

    const [count, setCount] = React.useState<number>(0);
    const [lowestCount, setLowestCount] = React.useState<number>(0);
    const [items, setItems] = React.useState<any>([]);
  
    const enqueue = (element: T) => {
      items[count] = element;
      setCount(count => count + 1);
    }
  
    const dequeue = React.useCallback(() => {
      if (isEmpty()) {
        return undefined;
      }
      const result = items[0];
      items.shift();

      console.log('items fila', items)

      setItems(items)
      setCount(count => count - 1)
      return result;
    }, [items, lowestCount])
  
    const peek = () => {
      if (isEmpty()) {
        return undefined;
      }
      return items[lowestCount];
    }
  
    const isEmpty = () => {
      return items.length === 0;
    }
  
    const clear = () => {
      setItems({});
      setCount(0);
      setLowestCount(0);
    }
  
    const size = () => {
      return count - lowestCount;
    }
  
    const toString = () => {
      if (isEmpty()) {
        return '';
      }
      let objString = `${items[lowestCount]}`;
      for (let i = lowestCount + 1; i < count; i++) {
        objString = `${objString},${items[i]}`;
      }
      return objString;
    }
  
    const values = (): undefined | T[] => {
      return isEmpty() ? undefined : Object.values(items);
    }

    return {
        peek,
        values,
        toString,
        size,
        clear,
        isEmpty,
        dequeue,
        enqueue,
    }
  }

  export default useQueue;