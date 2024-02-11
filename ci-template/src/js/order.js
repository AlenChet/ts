export default function orderByProps(obj, props) {
  const propsArray = [];
  const sortedArray = [];

  Object.keys(obj).forEach((key) => {
    if (props.includes(key)) {
      propsArray.push({ key, value: obj[key] });
    } else {
      sortedArray.push({ key, value: obj[key] });
    }
  });

  sortedArray.sort((a, b) => a.key.localeCompare(b.key));

  return [...propsArray, ...sortedArray];
}

export function extractSpecialAttacks({ special }) {
    return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
      id,
      name,
      description,
      icon,
    }));
}
