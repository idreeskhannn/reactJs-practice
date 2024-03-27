import IMAGE from '../assets/iamges/image.jpeg'

function Body() {

  const foo = (a) => {
    console.log("hello ", a)
  }

  const student = [
    {
      name: "idrees",
      email: "midreeskhan@gmail.com",
      phone: 1223434533,

    },
    {
      name: "khan",
      email: "khan@gmail.com",
      phone: 1223432324533,

    }
  ]

  return (
    <>

      {/* styling and create functioon  */}
      <div style={{border:"1px solid yellow" ,width:"50%",margin:"10px auto" , padding:"20px 200px"}}>
    <h1 style={{color:"red",width:"100%"}}>hello world </h1>

      <img src={IMAGE} style={{width:"100%"}} alt="" />
      <button onClick={()=>foo("world")}>click</button>
    </div>


{/* list rendering */}

      <div style={{ border: "1px solid yellow", width: "50%", margin: "10px auto", padding: "20px 200px" }}>
        <h1 style={{ color: "red", width: "100%" }}>


          <ul>

            {student.map((val, ind) =>
              <li key={ind}>{val.name}</li>
            )}

          </ul>

        </h1>

      </div>

    </>
  );
}

export default Body;
