import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

import { GetWeather } from "./API";
import { useEffect, useState } from "react";

import { Input } from "antd";

function App() {
  let [country, setCountry] = useState("");
  let [weather, setWeather] = useState();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
      >
        <Input
          placeholder="Basic usage"
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
            console.log(country);
          }}
        />
        <button
          onClick={(e) => {
            GetWeather(country).then((weather) => {
              setWeather(weather);
              console.log(weather.data.weather[0].main);
              console.log(weather.data.name);
            });
          }}
        >
          Search
        </button>
      </form>
      <Card
        style={{ width: 300, margin: "100px auto" }}
        cover={
          <img
            alt="example"
            src={
              weather.data.weather[0].main == "Clouds"
                ? "https://shabiba.eu-central-1.linodeobjects.com/2021/06/1622565933-1622565933-76deyyy11u9y.jpg"
                : weather.data.weather[0].main == "Rainy"
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMsLTN2u8ozzSm5z5U5P_ZcQJYV-m3Gk1kA&usqp=CAU"
                : weather.data.weather[0].main == "Sunny"
                ? "https://alanbatnews.net/assets/2019-01-09/images/34710388f6426716ba51aac7c7171a72.jpg"
                : weather.data.weather[0].main == "Clear"
                ?  "https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-2"
                : "https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.9997&x=0&y=0&width=1200&height=675"
            }
          />
        }
      >
        <Meta
          title={weather && weather.data.name}
          description={
            weather && (weather.data.main.temp - 273.15).toFixed(2) + " °C"
          }
        />
      </Card>
    </>
  );
}

export default App;
