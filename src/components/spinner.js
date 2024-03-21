

import { DNA } from 'react-loader-spinner';

//import Spinner from 'react-bootstrap/Spinner';

 function Spiner() {
  return (
    <DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    />
  );
}

export default Spiner;