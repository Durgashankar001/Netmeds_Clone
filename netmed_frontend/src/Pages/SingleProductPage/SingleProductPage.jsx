import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function SingleProductPage() {
  const {id} = useParams();
  const [data, setData] = useState({});
  let url = `https://reqres.in/api/users/${1}`;

  let getData = async () => {
    let res = await fetch(url);
    let res_data = await res.json();
    setData(res_data.data);
  };
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>user id : {id}</h1>
      <img src={data.avatar} alt="" />
      <h1>
        {data.first_name} {data.last_name}
      </h1>
      <h1>{data.email}</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}
