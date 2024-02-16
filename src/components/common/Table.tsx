
type TableProps = {
  title?: string;
  data?: Array<any>;
}

const Table = ({title, dataComponent}: TableProps) => {
debugger
  return (
    <div>
      <h1>{title}</h1>
      {dataComponent}
    </div>
  );
}

export default Table;