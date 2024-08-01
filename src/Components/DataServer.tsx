import { useSelector } from "react-redux";
import { RootState } from "../App";

export default function DataServer(){

    const event = useSelector((state: RootState) => state.clickInputSlice.Event);
    const detail = useSelector((state: RootState) => state.clickInputSlice.Detail);
    const writing = useSelector((state: RootState) => state.clickInputSlice.Writing);
    const atmosphere = useSelector((state: RootState) => state.clickInputSlice.Atmosphere);
    const style = useSelector((state: RootState) => state.clickInputSlice.Style);


    const data={
        "the Event": event,
        "Detail": detail,
        "type of writing": writing,
        "Choose atmosphere": atmosphere,
        "Choose Style": style,
    }
    console.log("data:"+data["the Event"]+data["Detail"]+data["type of writing"]+data["Choose atmosphere"]+data["Choose Style"]);

 {
    return (
      <>
        <pre>{JSON.stringify(data)}</pre>
      </>
    );
}
}