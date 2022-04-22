import React from "react";

function useStack<T> () {
  
    const [count, setCount] = React.useState<number>(0);
    const [items, setItems] = React.useState([]);
    
        const push = (element: T) => {
          items[count] = element;
          setCount(count => count + 1);
        }
      
        const pop =  React.useCallback(() => {
          if (isEmpty()) {
            return undefined;
          }
          const result = items[count];
          setCount(count => count - 1);
          items.pop();
          setItems(items); 
          return result;
        }, [items, count])
      
        const peek = () => {
          if (isEmpty()) {
            return undefined;
          }
          return items[count - 1];
        }
      
        const isEmpty = () =>  {
          return count === 0;
        }
      
        const size = () => {
          return count;
        }
      
        const clear = () => {
      
          setItems([]);
          setCount(0);
        }
      
        const toString = () => {
          if (isEmpty()) {
            return '';
          }
          let objString = `${items[0]}`;
          for (let i = 1; i < count; i++) {
            objString = `${objString},${items[i]}`;
          }
          return objString;
        }
      
        const values = () : undefined | T[] => {
          return isEmpty() ? undefined : Object.values(items);
        }
    
        return {
            values,
            toString,
            clear,
            size,
            peek,
            pop,
            push,
            count,
            items,
            isEmpty,
        }
      }


export default useStack;