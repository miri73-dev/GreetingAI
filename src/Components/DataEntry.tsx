import DataServer from './DataServer.tsx';
import ButtonSubmit from './ButtonSubmit.tsx';
import ListInputs from './ListInputs.tsx';

function DataEntry() {
    return (
      <>
          <ListInputs></ListInputs>
          <DataServer></DataServer>
          <ButtonSubmit></ButtonSubmit>
      </>
    )
  }
  
  export default DataEntry