const defaultObjectProps = {
    x: 100,
    y: 100,
    width: 150,
    height: 50,
    text: '',
  };
  
  export const createObject = (type) => ({
    id: Date.now(),
    type,
    isSelected: false,
    ...defaultObjectProps,
  });