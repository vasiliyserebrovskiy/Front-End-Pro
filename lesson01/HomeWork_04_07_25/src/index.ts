/*
Задание: Создайте тип Astronaut (Космонавт), у которого есть следующие поля:

isInSpace — булево значение (находится ли в космосе)
experienceYears — число (сколько лет опыта)
assistantRobot — объект типа Robot
missions — массив строк, например: ["Moon Landing", "ISS Maintenance"]
Тип Robot должен быть объектом с ключом model (например, { model: "XR-12" }).

Затем создайте типизированные переменные, используя эти типы.
*/

type Missions = string[];

interface Robot {
  model: string;
}

interface Astronaut {
  name: string;
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: Missions;
}

const missionsByMax: Missions = ["Moon Landing", "ISS Maintenance"];
const robot: Robot = {
  model: "XR-12",
};

const astronautMax: Astronaut = {
  name: "Max",
  isInSpace: true,
  experienceYears: 3,
  assistantRobot: robot,
  missions: missionsByMax,
};

console.log(astronautMax);
