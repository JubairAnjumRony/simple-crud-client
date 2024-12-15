import { useLoaderData } from "react-router-dom";


const UpdateProfile = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const updateUser = {email,password};
        console.log("upaded user is:",updateUser)
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'

            },
            body:JSON.stringify(updateUser)
        })
        .then(res =>res.json())
        .then(data =>{console.log(data);
            if(data.modifiedCount>0){
                alert("user updated successfully")
            }
     } )
    }

    return (
        <div>
            <h2>Please update your profile</h2>
            <form onSubmit={handleUpdate}>
                <input type ="email"  name="email" defaultValue={loadedUser?.email} id=""></input>  
                 <br/>
                <input type ="text"  name="password" defaultValue={loadedUser?.password} id=""></input>

                <br/>

                <input type ="submit" value = "submit"  id=""></input>  
            </form>
        </div>
    );
};

export default UpdateProfile;