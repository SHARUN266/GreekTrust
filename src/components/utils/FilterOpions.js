export function handleFilter(e, data, setData) {
  let { name, value } = e.target;
  switch (name) {
    case "gender": {
      let filterData = data.filter((e) => e.gender == value);
      setData(filterData);
      break;
    }
    case "color": {
      let filterData = data.filter((e) => e.color == value);
      setData(filterData);
      break;
    }
    case "type": {
      let filterData = data.filter((e) => e.type == value);
      setData(filterData);
      break;
    }
    case "price": {
      let [min, max] = value.split("-").map(Number);

      let filterData = data.filter((e) => e.price >= min && e.price <= max);
      filterData.sort((a, b) => a.price - b.price);
      setData(filterData);
      break;
    }
    default:{
        setData(data);
        break
    }
  }
}
