interface IProps {
  onclick: (event: { target: string }) => string;
}

interface IProps {
  color: string;
}

// someFunction({})
function someFunction(event: { target: string }) {
  return "ss";
}
const componentProps: IProps = {
  color: "red",
  onclick: someFunction,
};

type oncClick = (event: { target: string }) => string;

interface Electric {
  power: number;
}
interface Fuel {
  fuel: string;
}
type HybridCar = Fuel & Electric;
type NNHybridCar = Fuel | Electric;

interface HeaderItem {
  headerName: string;
  value: string;
}
type HeaderTpe = string;

interface ApiResponse {
  headers: { [key: string]: HeaderItem };
}

const apiResponse: ApiResponse = {
  headers: {
    authorization: { headerName: "authorization", value: "token" },
    contentType: { headerName: "content-type", value: "json" },
  },
};
