import '../styles/Main.css' 
import Header from '../components/Header';
import Commit from '../components/Commit';
import commitData from '../components/commitData';


function Main() {
  const commitElements = commitData.map(commit =>{
    return <Commit key = {commit.commitNumber} commit = {commit} />
  })

    return (
      <div className="app-container">
        <Header />
        <div className="content-container">
          <div className="main-content">
            {commitElements}
          </div>
        </div>
      </div>
  );
}

export default Main;
