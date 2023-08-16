function App11(){
    let name = "tenzin";
    return(
        <div>
            <div>
                <h1>{name}</h1>
                <Demo></Demo>
                <Hello></Hello>
            </div>
        </div>
    )
}



function Demo() {
    console.log('Demo')
    return (
      <div className="App">
        <div className='App-header'>
           <h1>App11</h1>
        </div>
      </div>
    );
  }



function Hello(){
    return(
        <h1>hello tenzin</h1>
    );
}


export default App11;