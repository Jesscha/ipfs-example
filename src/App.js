import './App.css'
import { useEffect, useState } from 'react'
import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')

function App() {
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [name, setName] = useState();
  const [resutlUrl, setResultUrl] = useState();


  const callback =  async () =>{
      const added = await client.add(JSON.stringify({"description":"LearningMan NFT.","image":"https://www.learningman.co/static/cb9efbeacb1737c460cc47aeeb70535e/98540/jesse-desc.png","name":"JESSE","attributes":[]}) )
      
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log(url)
      setResultUrl(url)
     }
  
  useEffect(()=>{
     ( async () =>{
      const added = await client.add(JSON.stringify({"description":"LearningMan NFT.","image":"https://www.learningman.co/static/cb9efbeacb1737c460cc47aeeb70535e/98540/jesse-desc.png","name":"JESSE","attributes":[]}) )
      console.log(added)  
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log(url)
     })()
  }, [])

  return (
    <div className="App">
      <h1>IPFS NFT uploader</h1>
      <div>
        description: {description}
      </div>
      <div>
        imageUrl: {imageUrl}
      </div>
      <div>
        name: {name}
      </div>
      <div>
        <label>
          Description
        </label>
        <input type="text" onChange ={(e)=>{
          setDescription(e.target.value)
        }}  />
      </div>
       <div>
        <label>
          ImageUrl
        </label>
        <input type="text" onChange ={(e)=>{
          setImageUrl(e.target.value)
        }}  />
      </div>
       <div>
        <label>
          Name
        </label>
        <input type="text" onChange ={(e)=>{
          setName(e.target.value)
        }}  />
      </div>
      <button onClick={()=>{callback()}}>
        send
      </button>


      <div>
        result IPFS URL : {resutlUrl}
      </div>
    
    </div>
  );
}

export default App